/* eslint-disable no-unused-vars */
import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    console.log(booking);
    const { _id, customerName, img, service, price, email, date, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-14 h-14">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <th>
                {
                    status === 'confirm' ?
                        <button className="btn btn-outline btn-secondary font-bold">Confirmed</button>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn  btn-warning text-white">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;