import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Products from './components/Content/Products/Products';
import Contact from './components/Content/Contact/Contact';
import Login from './components/Content/Login/Login'
import Header from './components/Header/Header';
import HomePage from './components/Content/HomePage/HomePage';
import Footer from './components/Footer/Footer'
import MessageSent from './components/Content/Contact/MessageSent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Login} />
          <Route path="/sent" component={MessageSent} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
