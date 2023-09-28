// "use client"
import React from 'react'
import Link from 'next/link'
function CustomNavbar() {
    return (
        <>
            <nav className='bg-dark text-light px-4 py-1 d-flex align-items-center justify-content-between fixed-top'>
                <h1><Link href="/" className='text-decoration-none text-white'>Next</Link></h1>

                <div className='d-flex align-items-center'>
                    <ul className='d-flex gap-3'>
                        <li><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                        <li><Link href="/formik" className='text-decoration-none text-white'>Form</Link></li>
                        <li>Sign Up</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default CustomNavbar