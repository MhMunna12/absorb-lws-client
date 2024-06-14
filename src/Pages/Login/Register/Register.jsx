/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Auth/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.confirm.value;
        form.reset()
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content   lg:flex-row">
                <div className="text-center lg:mr-14">

                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full shadow-lg max-w-sm  bg-base-50">
                    <div className="card-body">
                        <h3 className="text-3xl text-center font-bold">Sign Up    </h3>

                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811] hover:bg-[#fa6b4e] text-white" type='submit' value="Sign Up" />
                            </div>
                        </form>
                        <p className="my-4 text-center ">Already Have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;