import React from 'react'
import Layout from '../components/Layout';
import { useAuth } from '../context/authContext';

function Homepage() {
    const [auth, setAuth] = useAuth();
    return (
        <Layout title={"Ecommerce-homePage"}>
            Homepage
            <pre>
                so our context is {JSON.stringify(auth)}
            </pre>

        </Layout>
    )
}

export default Homepage