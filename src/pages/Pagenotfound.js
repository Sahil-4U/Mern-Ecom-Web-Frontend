import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

function Pagenotfound() {
    return (
        <Layout>
            <div className='d-flex justify-content-center align-items-center flex-column p-4 pnf'>
                <div className='d-flex align-items-center'>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h1 className='pnf-title mx-3'>! 404</h1>
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <h1 className='pnf-heading'>Oops ! Page Not Found</h1>
                <div className='pnf-button'>
                    <Link to={'/'} type='button' className='btn btn-outline-success'>
                        Go Back
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Pagenotfound