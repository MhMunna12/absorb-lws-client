/* eslint-disable no-unused-vars */
import React from 'react';
import svg1 from '../../assets/icons/check.svg';
import svg2 from '../../assets/icons/deliveryt.svg';
import svg3 from '../../assets/icons/Group 38729.svg';
import svg4 from '../../assets/icons/person.svg';
import svg5 from '../../assets/icons/quote.svg';
import svg6 from '../../assets/icons/Wrench.svg';
const CoreFeatures = () => {
    return (
        <div>
            <div className='text-center p-5 mt-20'>

                <h3 className='text-orange-600 font-bold'>Core Features</h3>
                <h1 className="text-5xl font-bold">Why Choose Us</h1>
                <p className="py-6">the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable. </p>
                <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                </div>
            </div>
            <div className='grid lg:grid-cols-6 sm:grid-cols-3 py-2 px-10  gap-4 '>
                <div className='border-solid border-2 border-grey-300 py-8 rounded-lg   text-center'>
                    <img className='inline-block align-middle' src={svg1} alt="Shoes" />
                    <h2 className='font-bold'>100% Guranty</h2>
                </div>
                <div className="border-solid border-2 border-grey-300   text-center py-8 rounded-lg">
                    <img className='inline-block align-middle' src={svg6} alt="" />
                    <h2 className='font-bold'>Expert Team</h2>
                </div>
                <div className="border-solid border-2 border-grey-300 py-8 rounded-lg  text-center">
                    <img className='inline-block align-middle' src={svg2} alt="Shoes" />
                    <h2 className='font-bold'>Timely Delivery</h2>
                </div>
                <div className="border-solid border-2 border-grey-300 py-8 rounded-lg  text-center">
                    <img className='inline-block align-middle' src={svg1} alt="Shoes" />
                    <h2 className='font-bold'>24/7 Support</h2>
                </div>
                <div className="border-solid border-2 border-grey-300 py-8 rounded-lg  text-center">
                    <img className='inline-block align-middle' src={svg4} alt="Shoes" />
                    <h2 className='font-bold'>Best Equipment</h2>
                </div>
                <div className="border-solid border-2 border-grey-300  py-8 rounded-lg text-center">
                    <img className='inline-block align-middle' src={svg6} alt="Shoes" />
                    <h2 className='font-bold'>100% Guranty</h2>
                </div>

            </div>
        </div>
    );
};

export default CoreFeatures;