import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import ProductCard from '../components/ProductCard';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductCard />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
