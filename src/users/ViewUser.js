import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ViewUser() {
    const [student, setStudent] = useState({
        id:"",
        fname: "",
        lname: "",
        email: ""
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8082/student/viewstudent/"
            + id).then(res => {
                setStudent(res.data)
            })
    }, [])
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
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.fname}</td>
                            <td>{student.lname}</td>
                            <td>{student.email}</td>
                        </tr>
                    </tbody>

                </table>
            </div>



        </div>
    )
}
