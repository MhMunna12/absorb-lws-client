/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center p-5 mt-12 max-w-4xl mx-auto'>


                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <h1 className="text-5xl font-bold">What’s Different About Absorb LMS</h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable. .</p>

                <div className='flex justify-center items-center gap-7'>
                    <div>
                        <h1 className="bg-purple-600 px-10 py-4 text-white text-lg rounded-full">Use Cases</h1>
                    </div>
                    <div>
                        <h1 className="hover:bg-purple-600 px-10 py-4 hover:text-white text-lg rounded-full">Use Cases</h1>
                    </div>
                    <div>
                        <h1 className="hover:bg-purple-600 px-10 py-4 hover:text-white text-lg rounded-full">Use Cases</h1>
                    </div>
                </div>
                <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }

                </div>
            </div>

        </div >
    );
};

export default Services;