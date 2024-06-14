/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import login from '../../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signInUser } = useContext(AuthContext);
    const from = location.state?.from?.pathname || "/"
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true });
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
                    <form onSubmit={handleSubmit} className="card-body">
                        <h3 className="text-3xl text-center font-bold">Login</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                            <input className="btn bg-[#FF3811] hover:bg-[#fa6b4e] text-white" type='submit' value="Login" />
                        </div>
                        <p className="my-4 text-center ">New to car work place <Link className='text-orange-600 font-bold' to='/register'>Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Login;