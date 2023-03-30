import React from 'react'
import SkNotes from './SkNotes';


const Home = () => {

    return (
        <div>
            <div className="container my-3 ">
                <h2>Add a Notes</h2>
                <form>
                    <div class="form-group my-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group my-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <SkNotes />
            </div>
        </div>
    )
}

export default Home
