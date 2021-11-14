import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Button, Container, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const drawerWidth = 240;

function ReviewUser(props) {
    const { handleSignOut, user } = useAuth();
    const history = useHistory();
    const [ReviewInfo, setReviewInfo] = React.useState({ name: user.displayName, email: user.email });
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


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

    // handle dashboard route ---------------------------------
    const handleDashboardRoute = (text) => {
        history.push(text);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Pay', 'MyOrder', 'Review', 'home'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText onClick={() => handleDashboardRoute(text)} primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText onClick={handleSignOut} primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Gorgeous Watch shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
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
            </Box>
        </Box>
    );
}

ReviewUser.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ReviewUser;
