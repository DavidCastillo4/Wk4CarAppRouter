
import React from 'react';
import { Switch, Route } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import Car from './components/Car';
import Navigation from './components/Navigation';

export let Router = () => {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />               
          <Route exact path="/Car/:id" component={Car} />  
        </Switch>
      </>
    )
  };

