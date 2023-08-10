import React from 'react'
import Layout from '../../components/Layout';
import UserMenu from '../../components/layout/UserMenu';
import { useAuth } from '../../context/authContext';

function Dashboardpage() {
    const [auth] = useAuth();
    return (
        <Layout title={'Dashboard-Ecom-app'}>
            <div className='container-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <div className='card w-75 p-3'>
                            <h3>Hi, {auth?.user?.name}</h3>
                            <h3>Your email: {auth?.user?.email}</h3>
                            <h3>Your address: {auth?.user?.address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboardpage;