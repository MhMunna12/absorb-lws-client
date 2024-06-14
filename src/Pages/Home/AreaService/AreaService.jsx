/* eslint-disable no-unused-vars */
import React from 'react';

import { FaBurn, FaCalendarAlt, FaMobileAlt } from "react-icons/fa";
const AreaService = () => {
    return (
        <div className="bg-black rounded-lg px-24 py-20 mt-28 mb-24">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1   gap-4 text-white ">
                <div className="flex  items-center gap-3">
                    <FaCalendarAlt className='text-xl text-rose-500' />
                    <div>
                        <p className='text-sm'>We are open monday-friday</p>
                        <h3 className='font-bold text-2xl'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex  items-center gap-3'>
                    <FaMobileAlt className='text-xl text-rose-500' />
                    <div>
                        <p className='text-sm'>Have a question?</p>
                        <h3 className='font-bold text-2xl'>+2546 251 2658</h3>
                    </div>
                </div>
                <div className='flex  items-center gap-3'>
                    <FaBurn className='text-xl text-rose-500' />
                    <div>
                        <p className='text-sm'>Need a repair? our address</p>
                        <h3 className='font-bold text-2xl'>Liza Street, New York</h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AreaService;