import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

function CreateProduct() {
    return (
        <Layout>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9'>
                    <h3>Products</h3>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct