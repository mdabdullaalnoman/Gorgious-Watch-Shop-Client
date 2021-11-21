import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOut from './CheckOut';

const stripePromise = loadStripe('pk_test_51HZvOyCfWCozJFUVSjGIlu0YT9VEHIIhYG6gTTX5derusxAK01n36UQkLPDQfPcnoLudefyseQZedFA61Uj1gnlt005EKcxAMc');

const Payment = () => {
    const { paymentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/parches/${paymentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))

            .catch(error => console.log(error))
    }, [paymentId]);

    return (
        <div>
            <h1>payment for : {paymentId}</h1>
            <h1>{appointment.title}</h1>
            <h1>{appointment.price}</h1>
            {
                appointment.price &&
                <Elements stripe={stripePromise}>
                    <CheckOut parchesData={appointment} />
                </Elements>
            }
        </div>
    );
};

export default Payment;