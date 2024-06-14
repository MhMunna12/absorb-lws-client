/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
const EngineerCard = ({ engineer }) => {
    const { imgs, name, expert } = engineer;
    console.log(engineer);
    return (
        <div className="card py-4 bg-base-100  shadow-xl mt-5">
            <figure className="px-5 rounded-xl  ">
                <img className="rounded-xl" src={imgs} style={{ height: '190px', width: '260px' }} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-pink-400'>{expert}</p>
                <div className='flex space-x-4 '>
                    <FaFacebook className='text-3xl text-primary' />
                    <FaTwitter className='text-teal-300 text-3xl' />
                    <FaInstagramSquare className='text-blue-600 text-3xl' />
                    <FaLinkedin className='text-rose-400 text-3xl' />
                </div>
            </div>
        </div>
    );
};

export default EngineerCard;