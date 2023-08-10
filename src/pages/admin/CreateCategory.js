import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

function CreateCategory() {
    return (
        <Layout>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9'>
                    <h3>
                        Categories
                    </h3>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory