import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import SetNotes from './components/SetNotes';
//prevent losing redux state data on refresh if in a "/:id" route directly
// use non exact match, so it will match both /notes and /notes/id

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/notes' component={SetNotes} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
