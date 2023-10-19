"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import API from '../endPoints';


function page() {
    const [user, setUser] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [updateApi, setUpdateApi] = useState({})

    function handlechange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log('data', data)
    async function handlesubmit(e) {
        e.preventDefault()
        if (Object.keys(updateApi).length !== 0) {
            let res = await axios.put(`${API.users}/` + updateApi._id, data)
            setData({
                name: "",
                email: "",
                password: ""
            })
        }
        else {
            let res = await axios.post(API.users, data)
            setData({
                name: "",
                email: "",
                password: ""
            })
        }
        setDisabled(false)
    }
    async function handledelete(id) {
        let data = await axios.delete(`${API.users}/` + id)
    }
    function handleEdit(id) {
        let obj = user.find((e) => e._id == id)
        setUpdateApi(obj)
        setData(obj)
        setDisabled(true)

    }
    useEffect(() => {
        let call = async () => {
            let data = await axios.get(API.users)
            setUser(data.data)
        }
        call()
    }, [])
    return (
        <>
            <div className='w-25 mx-auto' style={{ marginTop: "130px" }}>
                <form onSubmit={handlesubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={data.name} onChange={handlechange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={handlechange} />
                    </div>
                    {/* <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='password' value={data.password} onChange={handlechange} />
                    </div> */}

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Password</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((e) => {
                        return <>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                {/* <td>{e.password}</td> */}
                                <td><button className='btn btn-primary' disabled={disabled} onClick={() => handleEdit(e._id)}>Update</button></td>
                                <td><button className='btn btn-danger' disabled={disabled} onClick={() => handledelete(e._id)}>Delete</button></td>
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