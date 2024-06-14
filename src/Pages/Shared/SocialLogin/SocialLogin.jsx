/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Auth/AuthProvider';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()

            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="divider divider-accent">Or</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline "><FaGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;