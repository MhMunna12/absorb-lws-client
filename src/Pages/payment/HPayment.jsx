/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { AuthContext } from '../../Auth/AuthProvider';



const CheckoutForm = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (!data.clientSecret) {
                throw new Error('Missing clientSecret in response');
            }

            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            });
            console.log(result);
            if (result.error) {
                setError(result.error.message);
            } else if (result.paymentIntent.status === 'succeeded') {
                console.log('Transaction id', result.paymentIntent.id);
                setTransactionId(result.paymentIntent.id)
                const payment = {
                    email: user.email,
                    status: 'payment',
                    TransactionId: result.paymentIntent.id,
                    date: new Date()
                }
                const response = await fetch('http://localhost:5000/payments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payment)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-[400px] mx-auto mt-5 text-center" >
            <div className="text-center p-10">
                <h1 className='text-3xl font-bold '>Payment</h1>
                <div className="divider divider-primary w-[250px] mx-auto"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-5" type="submit" >
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                {transactionId && <p className="text-red-500">Your transaction Id: <span className="text-green-500">{transactionId}</span></p>}
            </form>
        </div>
    );
};

export default CheckoutForm