import React, { useContext } from 'react'
import StoreData from './CURD/Store';
import { Link, useNavigate } from 'react-router-dom';
import './style/student.css'

const Student = () => {
  const ContextData = useContext(StoreData)
  const nav = useNavigate()

  return (
    <div>
      <h1 className='heading'>Student</h1>
      <button className='button' onClick={()=> nav('/Newstudent')}>Add New Student</button>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            </tr>
        </thead>
        <tbody>
          {ContextData.StuName.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td><Link state={{data : index}} to='/edit'>Edit</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Student