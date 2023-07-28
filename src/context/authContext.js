import { useState, createContext, useContext, useEffect } from "react";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })
    useEffect(() => {
        const data = localStorage.getItem('user');
        if (data) {
            const parse = JSON.parse(data);
            setAuth((prev) => {
                return {
                    ...prev,
                    user: parse.user,
                    token: parse.token
                }
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);



export { useAuth, AuthProvider };

