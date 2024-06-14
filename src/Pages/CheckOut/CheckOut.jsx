/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Auth/AuthProvider';

const CheckOut = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, price, title, service_id, img } = service;
    console.log(service);
    const handleServiceOrder = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user?.email
        const address = form.address.value;
        form.reset()
        // const price = form.price.value;

        const booking = {
            customerName: name,
            email: email,
            phone,
            img,
            price: price,
            message: address

        }
        console.log(booking);

        const response = await fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booking)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

    }
    return (
        <div>
            <h2 className="text-4xl">You are about to order: {title}</h2>
            <h4 className='text-3xl'>Price: {price}</h4>
            <form onSubmit={handleServiceOrder} className="flex gap-5 items-center justify-between flex-col md:flex-col-reverse lg:flex-row">
                <div>
                    <img className='h-[500px] w-[550px]' src={img} alt="" />
                </div>
                <div className='card-body   bg-base-200 mt-10 mb-16 rounded-md'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className="form-control">

                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered" required />

                        </div>


                        <div className="form-control">

                            <input name='price' type="text" defaultValue={price} placeholder="Your Price" className="input input-bordered" required />

                        </div>
                        <div className="form-control">

                            <input name='email' type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                        </div>


                    </div>
                    <textarea name='address' className="textarea textarea-bordered" placeholder="Your Address"></textarea>
                    <div className="form-control mt-6">

                        <input className='btn bg-red-500 hover:bg-red-700 text-white font-bold btn-block' type="submit" value='Pay' />
                    </div>
                </div>
            </form>
        </div>

    );
};

export default CheckOut;