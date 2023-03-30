import React from 'react'
import SkNotes from './SkNotes';


const Home = () => {

    return (
        <div>
            <div className="container my-3 ">
                <h2>Add a Notes</h2>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control my-2" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <SkNotes />
            </div>
        </div>
    )
}

export default Home
