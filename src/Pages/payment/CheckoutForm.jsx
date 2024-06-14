/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const CheckoutForm = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then(data => setClientSecret(data.clientSecret))

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card })
        if (error) {
            console.log(error);
            setError(error.message)
        } else {
            console.log(paymentMethod);
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: cardConfirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        })
        if (cardConfirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
            const payment = {
                email: user.email,

                status: 'pending'
            }
            // const res = await axiosSecure.post('/payments', payment)
            // console.log('payment', res.data);
            // if (res.data?.paymentResult?.insertedId) {
            //     Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: "Thank You for Payment",
            //         showConfirmButton: false,
            //         timer: 1500
            //     });
            // }
        }
    }
    return (
        <div className="w-[400px] mx-auto mt-5 text-center" >
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

export default CheckoutForm;