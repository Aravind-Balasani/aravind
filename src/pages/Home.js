import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();
  const [Students, SetStudents] = useState([]);
  useEffect(() => {
    loadStudents();
  }, [])
  const loadStudents = async () => {
    axios.get("http://localhost:8082/student/viewall").then(result => SetStudents(result.data));
  }
  const deleteStudent = (e, id) => {

    axios.delete("http://localhost:8082/student/delete/" + id)


    window.location.reload()
  }
  const viewStudent = (e, id) => {
    e.preventDefault()
    navigate('/ViewUser/' + id)
  }

  const update = (e, id) => {
    e.preventDefault()
    navigate('/editStudent/' + id)
  }
  return (
    <div className='container'>
      <div className='py-4'>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{
            Students.map((student, index) =>
              <tr key={index}>

                <td>{student.id}</td>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.email}</td>
                <td>
                  <button className='btn btn-primary mx-2' onClick={(e) => { viewStudent(e, student.id) }}>View</button>
                  <button className='btn btn-light' onClick={(e) => { update(e, student.id) }} >Update</button>
                  {/* <Link className='btn btn-outline-primary mx-2' to={`/EditStudent/${Students.id}`}>Edit</Link> */}
                  <button className='btn btn-danger mx-2' onClick={(e) => { deleteStudent(e, student.id) }}>Delete</button>
                </td>
              </tr>

            )

          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
