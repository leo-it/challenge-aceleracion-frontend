import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Operations from './components/Operations'
import Category from './components/Category'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/operations" component={Operations}/>
      <Route path="/category" component={Category}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
