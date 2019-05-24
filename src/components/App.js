import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';

export default function App(){
  return (
    <Router>
      <Switch>
        {/* <Route path="/posts/:id" component={PostById} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
