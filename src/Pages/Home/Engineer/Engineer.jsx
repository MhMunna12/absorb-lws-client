/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import EngineerCard from './EngineerCard';
const engineerData = [

    {
        "id": 1,
        expert: ' Engine Expert',
        name: 'Engine Repair',
        imgs: img1
    },
    {
        "id": 2,
        expert: 'Electrical Expert',
        name: 'Electrical System',
        imgs: img2
    }
    ,
    {
        "id": 3,
        expert: 'Automatic Expert',
        name: 'Automatic Services',
        imgs: img3
    }
    ,


]
const Engineer = () => {
    return (
        <div className='text-center p-5 mt-10'>

            <h3 className='text-orange-600 font-bold'>Team</h3>
            <h1 className="text-5xl font-bold">Meet Our Team</h1>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour,  or randomised words <br /> which dont look even slightly believable. </p>
            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    engineerData.map(engineer => <EngineerCard
                        key={engineer.id}
                        engineer={engineer}
                    ></EngineerCard>)
                }

            </div>
        </div>
    );
};

export default Engineer;