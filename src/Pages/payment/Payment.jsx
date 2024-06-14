/* eslint-disable no-unused-vars */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import HPayment from './HPayment';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51IeI8IKQ0rUFHkAj5YfN99juT0vddoulWFM1dHJmeneYz2ltfEcSxN3004kvKD9Ia5VnR6BF7HoheLGsyhi9qKtt00a93I68Ye')
    return (
        <div>
            <Elements stripe={stripePromise}>
                <HPayment />
            </Elements>
        </div>
    );
};

export default Payment;