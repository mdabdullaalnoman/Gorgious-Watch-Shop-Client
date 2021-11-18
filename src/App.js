import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import AllWatch from './Pages/AllWatch/AllWatch';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MyOrder from './Pages/MyOrder/MyOrder';
import NoFound from './Pages/NotFound/NoFound';
import Pay from './Pages/Pay/Pay';
import Payment from './Pages/Payment/Payment';
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
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/purches">
            <Purches />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/allWatches">
            <AllWatch />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
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
          <Route path="/dashboard/payment/:paymentId">
            <Payment />
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