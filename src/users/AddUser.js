import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
    let navigate=useNavigate()
     const[Student,SetStudent]=useState({
        fname:"",
        lname:"",
        email:""
     })
     const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8082/students/add",Student)
        
        navigate("/")
     }
  return (
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    First Name
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your firstName' name="First"  onChange={(e) => { SetStudent({ ...Student, fname: e.target.value }) }}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Last Name
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your LastName' name="Last" onChange={(e) => { SetStudent({ ...Student, lname: e.target.value }) }}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Email
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your Email' name="email" onChange={(e) => { SetStudent({ ...Student, email: e.target.value }) }}/>
            </div>
            <button type='submit' className='btn btn-outline-primary' onClick={()=>{}} >Submit</button>
            <button type='submit' className='btn btn-outline-danger mx-3'>Cancel</button>
            </form>
        </div>
     
    </div>
  )
}
