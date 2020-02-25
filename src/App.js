import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Products from './components/Content/Products/Products';
import Contact from './components/Content/Contact/Contact';
import Login from './components/Content/Login/Login'
import Header from './components/Header/Header';

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
      </Router>
    </div>
  );
}

export default App;
