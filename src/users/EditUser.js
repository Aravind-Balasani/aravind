import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function EditUser() {
    let navigate = useNavigate()
    // const { id } = useParams()
    // const [Student, SetStudent] = useState({
    //     fname: "",
    //     lname: "",
    //     email: ""
    // })
    //  useEffect(()=>{
    //     loadStudents()
    //  },[])

    const { id } = useParams();
    const [student, setStudent] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    useEffect(() => {
        axios.get("http://localhost:8082/student/viewstudent/"
            + id).then(res => {
                setStudent(res.data)
            })
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault();

        axios.put("http://localhost:8082/student/update/" + id, student)

        navigate("/")

        window.location.reload();
    }
    //  const loadStudents=async()=>{
    //     const result=await axios.get(`http://localhost:8082/student/update/{id}`)
    //     SetStudent(result.data)
    //  }
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Student</h2>
                <form >
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            First Name
                        </label>
                        <input type={"text"} className='form-control' placeholder='Enter your firstName' name="First" value={student.fname} onChange={(e) => { setStudent({ ...student, fname: e.target.value }) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Last Name
                        </label>
                        <input type={"text"} className='form-control' placeholder='Enter your LastName' name="Last" value={student.lname} onChange={(e) => { setStudent({ ...student, lname: e.target.value }) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Email
                        </label>
                        <input type={"text"} className='form-control' placeholder='Enter your Email' name="email" value={student.email} onChange={(e) => { setStudent({ ...student, email: e.target.value }) }} />
                    </div>
                    <button type='submit' className='btn btn-outline-primary' onClick={(e) => onSubmit(e)} >Submit</button>
                    <button type='submit' className='btn btn-outline-danger mx-3' >Cancel</button>
                </form>
            </div>

        </div>
    )
}
