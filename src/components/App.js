import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import CreateCommentContainer from './CreateCommentContainer';

export default function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/comments/:id" component={CreateCommentContainer} />
        <Route exact path="/" component={Home} />
      </Switch>

    </Router>
  );
}
