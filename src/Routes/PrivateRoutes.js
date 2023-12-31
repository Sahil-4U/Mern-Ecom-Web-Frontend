import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../pages/Spinner';

export default function PrivateRoutes() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await axios.get('http://localhost:9090/auth/user-auth');
            console.log(res);
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        }
        if (auth?.token) checkAuth();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner path="/" />;
}

