import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './form.css';

function Loginpage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:9090/auth/login`,
                { email, password }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/');

            } else {
                toast.error(res.data.message);
                console.log(res.data.message);
            }
            console.log(res.data);
        } catch (erro) {
            console.log(erro);
            toast.error('Something went wrong in post request');
        }
    }

    return (
        <Layout title="Login - Ecommer App">
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Loginpage