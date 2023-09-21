"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function page() {
    const [user, setUser] = useState([])
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handlechange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log('data', data)
    async function handlesubmit(e) {
        e.preventDefault()
        let res = await axios.post("http://localhost:8080/api/users", data)
    }
    async function handledelete(id) {
        let data = await axios.delete("http://localhost:8080/api/users/" + id)
    }
    useEffect(() => {
        let call = async () => {
            let data = await axios.get("http://localhost:8080/api/users")
            setUser(data.data)
        }
        call()
    }, [])


    return (
        <>
            <div className='w-25 mx-auto'>
                <form onSubmit={handlesubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={data.name} onChange={handlechange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={handlechange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={handlechange} value={data.password} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user?.map((e) => {
                            return <>
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td><button className='btn btn-primary'>Update</button></td>
                                    <td><button className='btn btn-danger' onClick={() => handledelete(e._id)}>Delete</button></td>
                                </tr>
                            </>
                        })
                    }

                </tbody>
            </table>


        </>
    )
}

export default page