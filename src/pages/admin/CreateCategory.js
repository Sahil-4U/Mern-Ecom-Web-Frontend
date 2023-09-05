import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import CategoryForm from '../../components/Form/CategoryForm';

function CreateCategory() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:9090/category/create-category', { name });
            if (data?.success) {
                toast.success(`${name} is created successfully`);
                getallCat();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong in handlesubmit form');
        }
    }

    const getallCat = async () => {
        try {
            const { data } = await axios.get('http://localhost:9090/category/all-category');
            if (data.success) {
                setCategories(data.categorydb);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in get all categories')
        }

    }
    useEffect(() => {
        getallCat();
    }, [])
    return (
        <Layout title={'Dashboard-Create Category'}>
            <div className='container-fluid m-1 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9'>
                        <h3>
                            Manage Categories
                        </h3>
                        <div className='p-2'>
                            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div className='w-75 table-group'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        categories && categories.map((v) => {
                                            return (
                                                <tr key={v._id}>
                                                    <td>{v.name}</td>
                                                    <td><button className='btn btn-outline-dark'>
                                                        edit
                                                    </button>
                                                        <button className='btn btn-danger ms-1'>
                                                            Delete
                                                        </button></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory