import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const onBlur = (e) => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        e.preventDefault();
        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');  
                    setSuccess(true);
                }
            })

            .catch(err => err.message);

        console.log('make admin clicked');
    }
    return (
        <div>
            <h1>THIS IS MAKE ADMING PAGE</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="enter email"
                    onChange={onBlur}
                />
                <br /><br />
                <button type="submit">Make Admin</button>
            </form>
            {
                success &&
                <Alert variant="outlined" severity="success">
                    Make admin success fully
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;