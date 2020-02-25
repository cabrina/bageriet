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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route path="/" component={Products}/>
          <Route exact path="/" />
          <Route path="/" component={Contact}/>
          <Route path="/" component={Login}/>
        </Switch>

        <Header />
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
