import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css'; // Import CSS file

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Tristan Livengood</h1>
          <nav>
            <NavLink to="/about" activeClassName="active">About Me</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
          </nav>
        </header>

        <main>
          <Route path="/about" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </main>

        <footer>
          <a href="https://github.com/trlivenp" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tristan-livengood-174a7b254/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/t_livengood" target="_blank" rel="noopener noreferrer">Twitter</a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
