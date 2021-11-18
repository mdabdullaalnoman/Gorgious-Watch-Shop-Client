
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

function MyOrder(props) {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);

    // my order (filter by email)------------------------------
    useEffect(() => {
        fetch(`https://thawing-ravine-64043.herokuapp.com/parches?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))

            .catch(err => console.log(err.message))
    }, [myOrder , user.email]);


    // delete products ----------------------------------------
    const handleParchesDelete = (id) => {
        const process = true;
        if (process) {
            fetch(`https://thawing-ravine-64043.herokuapp.com/parches/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully')
                    }
                    else {
                        alert('something went worng')
                    }
                })
        }
    }

    return (
        <Grid container item spacing={2}>
            {
                myOrder.map(data =>
                    <Grid item xs={12} md={4}>
                        <div key={data?._id}>
                            <h1>{data?._id}</h1>
                            <h2>{data?.name}</h2>
                            <h2>{data?.title}</h2>
                            <h4>{data?.price}</h4>
                            <button onClick={() => handleParchesDelete(data?._id)}>Cancel</button>
                            <Link to={`payment/${data._id}`}>{data.payment ? 'paid' : 'pay'}</Link>
                        </div>
                    </Grid>
                )
            }
        </Grid>
    );
}



export default MyOrder;
