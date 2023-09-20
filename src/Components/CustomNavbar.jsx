"use client"

import React from 'react'

function CustomNavbar() {
    console.log("testing")
    return (
        <nav className="bg-primary text-light d-flex justify-content-between align-items-center p-3">
            <div className=''>
                <a href='/' className='text-decoration-none text-light'>Work manager</a>
            </div>

            <ul className='d-flex align-items-center gap-5'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>

            </ul>

            <div>
                right
            </div>
        </nav>
    )
}

export default CustomNavbar