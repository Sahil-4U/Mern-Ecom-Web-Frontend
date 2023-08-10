import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

function CreateProduct() {
    return (
        <Layout title={'Dashboard-Create Products'}>
            <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9'>
                    <h3>Products</h3>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct