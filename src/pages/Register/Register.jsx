import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../../public/107385-login.json'
import { AuthContex } from '../../AuthProvider/AuthProvider';


const Register = () => {
    const [ error , setError] = useState('')
    const navigate = useNavigate()

    const {register ,profail} = useContext(AuthContex)

    const handleRegister = event =>{
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        register(email , password)
        .then(result =>{
            const creatUser = result.user;
            profail(name , photoUrl)
            console.log(creatUser)
            navigate('/')
            form.reset()
        })
        .catch(err =>{
            const error = err.message
            setError(error)
        })

        console.log(name , photoUrl,email, password )
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <Lottie animationData={animation} loop={true} />;
                </div>
                <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-1/2">

                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Register</h1>

                        <form onSubmit={handleRegister}>
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
                                <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='text-center text-red-600'>{error}</p>
                        <p>Already have an account ? <Link className='text-purple-800' to='/login'> Please log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;