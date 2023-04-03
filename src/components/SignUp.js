import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



const SignUp = (props) => {
    const [cred, setCred] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = cred;
        // Fetch APi 
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //  Save the authToken and  redirect
            localStorage.setItem('token', json.authToken);
            navigate("/login");
            props.showAlert(":-Account successfully created", "success")
        }
        else {
            props.showAlert(":-Invalid Credential", "danger")
        }


    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h2 className='mt-3'>Signup to continue to Sky-Note</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required minLenght={3} type="text" className="form-control my-2" id="name" onChange={onChange} name='name' aria-describedby="emailHelp" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input required type="email" className="form-control my-2" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input required minLength={5} type="password" className="form-control my-2" name='password' id="password" onChange={onChange} placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input required minLength={5} type="password" className="form-control my-2" name='cpassword' id="cpassword" onChange={onChange} placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    )
}

export default SignUp

// disabled={cred.password.length < 5 || cred.cpassword.length < 5}