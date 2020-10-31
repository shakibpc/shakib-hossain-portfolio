import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import Blog from './components/Blog/Blog';
import Project from './components/Project/Project';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/projects">
            <Project />
        </Route>
        <Route path="/blogs">
            <Blog />
        </Route>
        <Route path="/contact">
            <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
