// "use client"
import React from 'react'
import Link from 'next/link'
function CustomNavbar() {
    return (
        <>
            <nav className='bg-dark text-light px-4 py-1 d-flex align-items-center justify-content-between fixed-top'>
                <h1><Link href="/" className='text-decoration-none text-white'>Next</Link></h1>

                <div>
                    <ul className='d-flex gap-3'>
                        <li><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                        <li><Link href="/formik" className='text-decoration-none text-white'>Form</Link></li>
                        <li><Link href="/signup" className='text-decoration-none text-white'>SignUp</Link></li>
                        <li><Link href="/login" className='text-decoration-none text-white'>Login</Link></li>
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default CustomNavbar