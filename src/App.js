import React from 'react';
import logo from './logo.svg';
import TextBox from './Tools/textBox'
import Menu from './Component/menu/menu'
import Login from './Component/login/login'
import Signup from './Component/login/signup'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Menu/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
     
    </div>
    </Router>
  );
}

export default App;
