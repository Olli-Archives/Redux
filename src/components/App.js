import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import CreateCommentContainer from './CreateCommentContainer';

export default function App(){
  return (
    <Router>
      <Switch>
        <Route path="/comments/:id" component={CreateCommentContainer} />
        <Route path="/" component={Home} />
      </Switch>
      <Posts/>
    </Router>
  );
}
