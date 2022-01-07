import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function LoginPage() {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/shows")
        }

    }, [])

    async function login() {
        let item = (emailId, password)
        let result = await fetch("http://localhost:8080/Userlogin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/shows")

    }
    return (
        <div>

            <div className='col-sm-6 offset-sm-3'>
                <h1 className='offset-sm-4'>LoginPage</h1>
                <input type="text" placeholder="Email" className='form-control' onChange={(e) => setEmailId(e.target.value)} />
                <br />
                <input type="password" placeholder="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button className='btn btn-primary' onClick={login}>Login</button>
            </div>

        </div>
    )
}

export default LoginPage;