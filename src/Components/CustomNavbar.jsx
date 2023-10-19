"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import UserContext from '@/context/userContext'
import { Logout } from '@/services/loginServices'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
function CustomNavbar() {
    const router = useRouter()
    const context = useContext(UserContext)

    console.log('context', context)
    async function doLogOut() {
        try {
            const result = await Logout()
            console.log('result', result)
            context.setUser(undefined)
            router.push("/login")

        } catch (err) {
            toast.error("failed to logged in")
        }
    }
    return (
        <>
            <nav className='bg-dark text-light px-4 py-1 d-flex align-items-center justify-content-between fixed-top'>
                <h1><Link href="/" className='text-decoration-none text-white'>Next</Link></h1>

                <div>
                    <ul className='d-flex gap-3'>
                        <li><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                        <li><Link href="/formik" className='text-decoration-none text-white'>Task</Link></li>
                        <li><Link href="/form" className='text-decoration-none text-white'>User</Link></li>
                        <li><Link href="/about" className='text-decoration-none text-white'>About</Link></li>
                        <li><Link href="/about/admin" className='text-decoration-none text-white'>Admin</Link></li>
                        {
                            context?.user?.name && (
                                <>
                                    <li><Link href="/signup" className='text-decoration-none text-white'>{context.user.name}</Link></li>
                                    <li><Link href="#" className='text-decoration-none text-white' onClick={doLogOut}>Logout</Link></li>
                                </>
                            )
                        }
                        {
                            !context?.user?.name && (
                                <>
                                    <li><Link href="/login" className='text-decoration-none text-white'>Login</Link></li>
                                    <li><Link href="/signup" className='text-decoration-none text-white'>Sign Up</Link></li>
                                </>
                            )
                        }



                    </ul>
                </div>
            </nav >
        </>
    )
}

export default CustomNavbar