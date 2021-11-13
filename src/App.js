import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import NoFound from './Pages/NotFound/NoFound';
import Pay from './Pages/Pay/Pay';
import Purches from './Pages/Purches/Purches';
import ReviewUser from './Pages/Review/ReviewUser';

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Pay">
            <Pay />
          </Route>
          <Route path="/MyOrder">
            <MyOrder />
          </Route>
          <Route path="/Review">
            <ReviewUser />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;