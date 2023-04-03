import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const [cred, setCred] = useState({ email: "", password: "" })
    // useNavigate Hook for Redirect
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Fetch APi
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email: cred.email, password: cred.password }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //  Save the authToken and  redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert(" :-Logged in successfully", "success")

        }
        else {
            props.showAlert(" :-Invalid Credential", "danger")

        }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 className='mt-3'>Login to continue to Sky-Note</h2>

            <div><form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} value={cred.email} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={cred.password} id="password" name='password' placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary my-2" >Submit</button>
            </form></div>
        </>
    )
}

export default Login