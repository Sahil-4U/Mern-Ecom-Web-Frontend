import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-dark text-light p-3' >
            <h4 className='text-center'>
                All rights reserved &copy; SaHiL-sHaRmA
            </h4>
            <p className='text-center footer-links '>
                <Link to={'/about'}>
                    About
                </Link>
                {" | "}
                <Link to={'/contact'}>
                    Contact Us
                </Link>
                {" | "}
                <Link to={'/policy'}>
                    Private Policies
                </Link>

            </p>
        </div>
    )
}

export default Footer