import React, { useContext } from 'react'
import StoreData from './Store'
import { useLocation, useNavigate } from 'react-router-dom'
import '../style/addstudent.css'

export const EditStudent = () => {
  const contextData = useContext(StoreData);
  const nav = useNavigate()
  const index = useLocation().state.data;

  const updateObj = {
    Name:contextData.StuName[index].Name,
    Age:contextData.StuName[index].Age,
    Course:contextData.StuName[index].Course,
    Batch:contextData.StuName[index].Batch
  }
  const handleChange = (e) =>{
    updateObj[e.target.name] = e.target.value
  }

  const handleclick = ()=>{
    contextData.StuName[index] =updateObj;
    nav('/student')
  }

  return (
    <div style={{padding:'25px 0 0 15px'}}>
      <h1>Edit Student</h1>
        <form className='form'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='Name' placeholder={contextData.StuName[index].Name} onChange={handleChange} />
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' name='Age' placeholder={contextData.StuName[index].Age} onChange={handleChange} /><br/><br/>
        <label htmlFor='course'>Course</label>
        <input type='text' id='course' name='Course' placeholder={contextData.StuName[index].Course} onChange={handleChange} />
        <label htmlFor='batch'>Batch</label>
        <input type='text' id='batch' name='Batch' placeholder={contextData.StuName[index].Batch} onChange={handleChange} /> 
        </form>
        <div className="btn">
        <button onClick={handleclick}>Submit</button>
        <button onClick={()=>{nav('/student')}}>Cancel</button>
        </div>
      </div>
  )
}
