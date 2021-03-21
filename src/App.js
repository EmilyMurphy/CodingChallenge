import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './Components/Forms/Form';
import Home from './Components/Home';
import Main from './Components/DateTimes/Main';

function App() {
  return (
      <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Form" component={Form} />
            <Route path="/Main" component={Main} />
            <Route component={Error} />
          </Switch>
      </main>
  )
}

export default App;
