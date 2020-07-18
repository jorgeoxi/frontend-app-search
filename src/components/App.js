import React from 'react';
import './styles/App.css';
import { LandingPage } from '../LandingPage/LandingPage';
import { Search } from '../Search/Search';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search} />
      <Route path='/' component={LandingPage} />
    </Switch>
  );
}

export default App;
