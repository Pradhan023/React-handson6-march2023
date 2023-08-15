import React, { useContext } from 'react'
import StoreData from './Store'
import { useNavigate } from 'react-router-dom'
import '../style/addstudent.css'

export const Addnewstudent = () => {
  const contextData = useContext(StoreData)
  const nav = useNavigate()

  const newStudent = {
    Name:'',
    Age:'',
    Course:'',
    Batch:''
  }

  const handleChange = (e)=>{
    newStudent[e.target.name] = e.target.value;
  }

  const handleclick = ()=>{
    contextData.StuName.push(newStudent)
    nav('/student')
  }

  return (
    <div style={{padding:'25px 0 0 15px'}}>
        <h1>Add New Student</h1>
        <form className='form'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='Name' placeholder='Name' onChange={handleChange} />
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' name='Age' placeholder='Age' onChange={handleChange} /> <br/><br/>
        <label htmlFor='course'>Course</label>
        <input type='text' id='course' name='Course' placeholder='Course' onChange={handleChange} />
        <label htmlFor='batch'>Batch</label>
        <input type='text' id='batch' name='Batch' placeholder='Batch' onChange={handleChange} />
        </form>
        <div className="btn">
        <button onClick={handleclick}>Submit</button>
        <button onClick={()=>{nav('/student')}}>Cancel</button>
        </div>
    </div>
  )
}
