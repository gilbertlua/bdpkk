import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import Dashboard from './src/Dashboard/Index';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
