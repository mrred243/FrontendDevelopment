import React from 'react';
import Customers from './components/customers.js';
import Training from './components/trainings.js';
import TrainingPage from './components/trainingPages.js';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import MyCalendar from './components/calendar.js'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Customer</Link>{''}
        <Link to="/trainings">Trainings</Link>{' '}
        <Link to="/calendar">Calendar</Link>{' '}
        <Switch>
          <Route exact path="/" component={Customers}/>
          <Route path="/trainings" component={TrainingPage}/>
          <Route path="/calendar" component={MyCalendar}/>
          <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
