import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const {paymentId} = useParams();
    const [appointment , setAppointment] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/parches/${paymentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))

        .catch(error => console.log(error))
    },[paymentId]);

    return (
        <div>
            <h1>payment for : {paymentId}</h1>
            <h1>{appointment.title}</h1>
            <h1>{appointment.price}</h1>
        </div>
    );
};

export default Payment;