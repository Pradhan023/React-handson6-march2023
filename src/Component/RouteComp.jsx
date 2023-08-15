import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route ,Routes} from 'react-router-dom'
import { Home } from './Home'
import Student  from './Student'
import { Contact } from './Contact'
import StoreData from './CURD/Store'
import { EditStudent } from './CURD/EditStudent'
import { Addnewstudent } from './CURD/Addnewstudent'
import './style/Navbar.css'

const RouteComp = () => {
    const [studentData , setStudentData] = useState([
        {
            Name : "Anish Pradhan" , 
            Age: 24 , Course: "MERN" , 
            Batch: "EA2023"},
        {
            Name : "Narji Begum" , 
            Age: 25 , 
            Course: "MERN" , 
            Batch: "EA2023"},
        {
            Name : "Akansha Bagul" , 
            Age: 25 , 
            Course: "MERN" , 
            Batch: "EA2023"},
        {
            Name : "Vitasta" , 
            Age: 24 , 
            Course: "Btech BIOtech" , 
            Batch: "2018"},
        {
            Name : "Himanshi" , 
            Age: 24 , 
            Course: "Btech CSE" , 
            Batch: "2018"}
    ])

  return (
    <>
    <BrowserRouter>
    <div className="navbar">
    <NavLink to='/' className='links'>Home</NavLink>
    <NavLink to='/student' className='links'>Student</NavLink>
    <NavLink to='/contact' className='links'>Contact</NavLink>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={
            <StoreData.Provider value={{StuName : studentData, updateStu : setStudentData}}>
                <Student/>
            </StoreData.Provider>
        } />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Newstudent' element={
            <StoreData.Provider value={{StuName : studentData, updateStu : setStudentData}}>
                <Addnewstudent/>
            </StoreData.Provider>        
        }/>
       <Route path='/edit' element={
        <StoreData.Provider value={{StuName : studentData, updateStu : setStudentData}}>
        <EditStudent/>
        </StoreData.Provider> 
       } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteComp