import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

function CreateCategory() {
    const [categories, setCategories] = useState([]);
    return (
        <Layout title={'Dashboard-Create Category'}>
            <div className='container-fluid m-3 p-3'>
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
            </div>
        </Layout>
    )
}

export default CreateCategory