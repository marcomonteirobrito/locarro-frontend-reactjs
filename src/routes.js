import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import CarCreate from './pages/CarCreate';
import CarList from './pages/CarList';
import UserCreate from './pages/UserCreate';
import GiveBack from './pages/GiveBack';
import Home from './pages/Home';
import RentCar from './pages/RentCar';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={UserCreate} />
        <Route path="/carRegister" component={CarCreate} />
        <Route path="/giveback" component={GiveBack} />
        <Route path="/carlist" component={CarList} />
        <Route path="/rent" component={RentCar} />
      </Switch>
    </BrowserRouter>
  );
}