import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Register = () => {
    const handleregister = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const passsword = form.get("passsword");
        const name = form.get("name");
        const photo = form.get("photo");
        console.log(email)
        
    } 
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center '>
                <div className="card w-full max-w-lg shadow-2xl bg-base-100 text-center mx-auto">
                    <form onSubmit={handleregister} className="card-body">
                        <div><h1>Please register</h1></div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" >register</button>
                        </div>
                    </form>
                    <p>Already have an account? <Link className='text-blue-300' to={"/login"}>Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;