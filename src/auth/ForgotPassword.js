import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './form.css';

function ForgotPassword() {
    const [email, setEmail] = useState();
    const [newpassword, setNewpassword] = useState();
    const [answer, setAnswer] = useState();


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:9090/auth/forget-password`,
                { email, newpassword, answer }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate('/login');

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
        <Layout>
            <div className="form-container ">
                <h4 className="display-6 text-center text-info p-1 mb-3">RESET PASSWORD</h4>
                <form onSubmit={handleSubmit}>


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
                            value={newpassword}
                            onChange={(e) => setNewpassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter new password"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputAnswer"
                            placeholder="What is your teacher name"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        RESET
                    </button>

                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword