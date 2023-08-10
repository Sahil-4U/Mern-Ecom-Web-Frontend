import React from 'react'
import Layout from '../../components/Layout';
import AdminMenu from '../../components/layout/AdminMenu';

function Users() {
    return (
        <Layout>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9'>
                    <h3>All users</h3>
                </div>
            </div>
        </Layout>
    )
}

export default Users;