import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Registerpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [add, setAdd] = useState('');

    const navigate = useNavigate();


    // here i am handling submit function
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post(`http://localhost:9090/auth/register`,
                { name, email, phone, password, address: add }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
            console.log(res.data);
        } catch (erro) {
            console.log(erro);
            toast.error('Something went wrong in post request');
        }
    }
    return (
        <Layout title={"Register-Ecom-app"}>
            <h1 className="display-5 text-center py-2 text-info ">Register User</h1>

            <form className='d-flex justify-content-center align-items-center px-5' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className="mb-3 col-6">
                        <label htmlFor="InputName" className="form-label">Name</label>
                        <input type="name" className="form-control" id="InputName" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="phone" className="form-label">Phone NO</label>
                        <input type="text" className="form-control" data-mdb-input-mask="+91 999-999-999" id="phone" placeholder='phone no..' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder='address..' value={add} onChange={(e) => setAdd(e.target.value)} required />
                    </div>
                    <div className='text-center '>
                        <button type="submit" className="btn btn-outline-primary  submit-button">Submit</button>
                    </div>

                </div>

            </form>

        </Layout>
    )
}

export default Registerpage;