import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading , admin } = useAuth();
    if (isLoading) {
        return <p>is Loading</p>}
        
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;