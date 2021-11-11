import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyOrder from './Pages/MyOrder/MyOrder';
import NoFound from './Pages/NotFound/NoFound';

const App = () => {
  return (
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
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;