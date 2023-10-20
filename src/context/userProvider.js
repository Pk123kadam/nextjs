"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify'
import { httpAxios } from '@/app/helper/httpHelper'
import { Current } from '@/services/loginServices'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    useEffect(() => {
        try {
            let call = async () => {
                let loggedUser = await Current()
                console.log('user', loggedUser)
                setUser(loggedUser)
            }
            call()


        } catch (err) {
            toast.error("error in loading current user")
            setUser(undefined)
        }
    }, [])
    console.log('user', user)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider
