import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import NoFound from './Pages/NotFound/NoFound';
import Purches from './Pages/Purches/Purches';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/myOrder">
            <MyOrder />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/purches">
            <Purches />
          </PrivateRoute>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;