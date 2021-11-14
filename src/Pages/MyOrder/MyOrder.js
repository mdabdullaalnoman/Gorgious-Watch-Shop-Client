import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Grid } from '@mui/material';
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
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const drawerWidth = 240;

function MyOrder(props) {
    const { user, handleSignOut } = useAuth();
    const history = useHistory();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [myOrder, setMyOrder] = useState([]);

    // my order (filter by email)------------------------------
    useEffect(() => {
        fetch(`https://thawing-ravine-64043.herokuapp.com/parches?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))

            .catch(err => console.log(err.message))
    }, [myOrder]);


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
                                </div>
                            </Grid>
                        )
                    }

                </Grid>

            </Box>
        </Box>
    );
}

MyOrder.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MyOrder;
