import React from 'react'
import SideBar from './MainContainer/SideBar'
import Portal from './LandingPage/Portal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Home from './Home';
import Navbar from './MainContainer/Navbar';

function App() {

  return (
  <div className="App">
    <Portal/>

    <Navbar/>

    <Home/>

    <SideBar/>
    
  </div>
  );
}

export default App;
