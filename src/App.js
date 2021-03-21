import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Navbar from './pages/Navbar.js';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <header>
        <Navbar></Navbar>
        </header>

        <hr></hr>

        <main>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
        <hr></hr>
        <footer>
          &copy; 2021 By Jihyun Lee
        </footer>
      </Router>
    </div>
  );
}

export default App;
