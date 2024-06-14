/* eslint-disable no-unused-vars */
import React from 'react';

const ProductCard = ({ product }) => {
    // console.log(product);
    const { img, name, price } = product;
    return (
        <div className="card p-5 bg-base-100 border-solid border-2 border-grey-100">
            <figure className="p-2 rounded-xl skeleton bg-base-200">
                <img className="" src={img} style={{ height: '170px', width: '170px' }} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-pink-400'>price: ${price}</p>

            </div>
        </div>
    );
};

export default ProductCard;