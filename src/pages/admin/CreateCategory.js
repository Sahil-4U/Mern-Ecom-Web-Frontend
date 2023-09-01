import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';

function CreateCategory() {
    const [categories, setCategories] = useState([]);

    const getallCat = async () => {
        try {
            const { data } = await axios.get('http://localhost:9090/category/all-category');
            if (data.success) {
                setCategories(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in get all categories');
        }

    }
    useEffect(() => {
        getallCat();
    }, [])
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