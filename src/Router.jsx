import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
