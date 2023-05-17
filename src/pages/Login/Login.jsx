import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../../public/107385-login.json'

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password )
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">
                <Lottie animationData={animation} loop={true} />;
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>

                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to toy shop <Link className='text-purple-800' to='/register'> please Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;