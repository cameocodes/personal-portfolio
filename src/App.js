import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import NavBar from './navigation/navigationBar'
import Footer from './navigation/footer'

function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
