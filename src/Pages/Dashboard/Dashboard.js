import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
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

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin';
import AddProduct from './AddProduct';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import ReviewUser from '../Review/ReviewUser';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../Login/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 240;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const { handleSignOut, admin } = useAuth();
    const history = useHistory();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

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

            {
                admin &&
                <Box sx={{ textAlign: 'center' }}>
                    <Link to={`${url}/makeAdmin`}>Make Admin</Link> <br />
                    <Link to={`${url}/addProduct`}>Add Product</Link><br />
                    <Link to={`${url}/manageProduct`}>Manage Product</Link>
                </Box>
            }
            <List>
                {['Pay', 'MyOrder', 'Review'].map((text, index) => (
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
                <Switch>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <Route path={`${path}/Pay`}>
                        <Pay />
                    </Route>
                    <Route exact path={`${path}/MyOrder`}>
                        <MyOrder />
                    </Route>
                    <Route exact path={`${path}/Review`}>
                        <ReviewUser />
                    </Route>
                    <Route exact path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </Route>
                    <Route exact path={`${path}/payment/:paymentId`}>
                        <Payment />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
