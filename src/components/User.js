import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



const User = () => {
    let navigate = useNavigate()
    const host = "http://localhost:5000"
    // const notesInitial = []
    // const [notes, setNotes] = useState(notesInitial);

    const [jname, setJname] = useState("");
    const [jemail, setJemail] = useState("");
    // const [jname, setJname] = useState("");
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getData();

        }

        else {
            navigate("/login");
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getData = async () => {
        // console.log("Adding a new note")
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },


        });
        let note = await response.json();
        console.log(note.name)
        console.log(note.email)
        console.log(note._id)

        setJname(note.name);
        setJemail(note.email);
        // setNotes(notes.concat(note))
    }


    const handleClick = () => {
    }
    return (
        <>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h2>Welcome,  {jname}</h2>
                            </div>
                            <div className="card-body">
                                <p>Email: {jemail}</p>
                                <p>Phone: (555) 123-4567</p>
                                <p>Address: 123 Main St, Anytown USA</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={handleClick} className="btn btn-primary mx-2">Edit Details</button>
                                <button className="btn btn-secondary mx-2">Change Password</button>
                                <button className="btn btn-danger mx-2">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}

export default User
