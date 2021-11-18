
import { Button, Container, TextField, Typography } from '@mui/material';
import * as React from 'react';
import useAuth from '../../Hooks/useAuth';


function ReviewUser(props) {
    const { user } = useAuth();
    const [ReviewInfo, setReviewInfo] = React.useState({ name: user.displayName, email: user.email });



    const handleReview = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...ReviewInfo }
        newUser[field] = value;
        setReviewInfo(newUser);
        console.log(newUser);
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const ReviewData = { ...ReviewInfo };

        // post Review data ---------------------
        fetch('https://thawing-ravine-64043.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ReviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('watch Review successfully')
                }
            })

            .catch(error => console.log(error.message))
    }

    return (
        <Container>
            <form onSubmit={handleReviewSubmit}
                style={{ textAlign: 'center', background: 'white', padding: '50px' }}>
                <Typography sx={{ p: 3 }} variant="h4" component="h2">
                    Review Now
                </Typography>;
                <TextField
                    id="outlined-password-input"
                    label="Name"
                    name="name"
                    onChange={handleReview}
                    defaultValue={user.displayName}
                    type="text"
                /><br></br><br />
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    name="email"
                    onChange={handleReview}
                    defaultValue={user.email}
                    type="text"
                /><br></br><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    onChange={handleReview}
                    multiline
                    rows={4}
                /><br></br><br />
                <TextField
                    id="outlined-password-input"
                    label="photo url"
                    name="photoUrl"
                    onChange={handleReview}
                    type="text"
                /><br></br><br />
                <TextField
                    id="outlined-password-input"
                    label="rate within 5"
                    name="rate"
                    onChange={handleReview}
                    type="number"
                /><br></br><br />
                <div>
                    <Button type="submit" variant="contained" >Review</Button>
                </div>
            </form>
        </Container>
    );
}

export default ReviewUser;
