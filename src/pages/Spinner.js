import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Spinner({ path = 'login' }) {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((p) => p - 1);
        }, 1000)
        count === 0 && navigate(`${path}`, {
            state: location.pathname
        })
        return () => clearInterval(interval);
    }, [count, navigate, location])
    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "100vh" }}>
            <h3>redirecting you in {count} seconds</h3>
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    )
}

export default Spinner