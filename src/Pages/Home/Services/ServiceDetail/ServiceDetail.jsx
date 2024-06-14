/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo1 from '../../../../assets/logo.svg'
const ServiceDetail = () => {
    const services = useLoaderData();
    console.log(services.facility);
    const { _id, img, title, description, price } = services;


    return (
        <div className=''>

            <div className="flex mt-16">
                <div className="flex-auto w-96  ">
                    <div className=''>
                        <img className="rounded-xl" style={{ width: '100%', }} src={img} alt="" />
                        <h3 className='text-5xl font-bold py-6'>{title}</h3>
                        <p >{description}</p>
                    </div>
                </div>
                <div className="w-96 text-center px-10">
                    <div className=' bg-base-200 py-8 rounded-lg   text-center'>
                        <img className='inline-block align-middle' src={logo1} alt="Shoes" />
                        <h2 className='font-semibold mt-4'>Need Help? We Are Here
                            <br />  To Help You</h2>
                        <div className='bg-black w-48 mx-auto mt-7 p-4 rounded-lg'>
                            <p className='text-xl font-bold text-white'><span className='text-red-600'>Car Doctor</span> Special</p>
                            <p className=' font-bold text-white'>Save up to <span className='text-red-600'>60% off</span></p>

                        </div>
                    </div>
                    <div className='mt-11'>
                        <p className=' font-bold text-2xl mb-6'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-block bg-red-500 text-white text-xl font-bold hover:bg-red-600">Service Booking</button></Link>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ServiceDetail;