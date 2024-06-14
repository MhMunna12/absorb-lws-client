/* eslint-disable no-unused-vars */
import React from 'react';
import person from '../../../assets/images/images/3.jpg'
import parts from '../../../assets/images/images/5.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-[#">
            <div className=" hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img className='w-3/4 rounded-lg shadow-2xl ' src={person} />
                    <img className='w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white' src={parts} />
                </div>
                <div className="lg:w-1/2 ">

                    <h1 className="text-5xl font-bold">Michael Garron Hospital Provides 24/7 Training with Absorb LMS</h1>
                    <p className="py-6">Watch this video to hear more about how Absorb boosts engagement while reducing training costs at Michael Garron Hospital.</p>

                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;