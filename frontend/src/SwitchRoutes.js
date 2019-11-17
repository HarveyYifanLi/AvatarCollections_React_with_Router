import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import AvatarList from './AvatarList';

//const Home = () => (<div>HOME</div>);
//const About = () => (<div>ABOUT</div>);

const SwitchRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/AvatarList" component={AvatarList}/>
  </Switch>
);

export default SwitchRoutes;