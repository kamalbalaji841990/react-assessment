import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Beverages from './components/Beverages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:beverage/:name/itemId-:itemid([0-9]+)/" component={Beverages}>
          </Route>
          <Route path="/" component={Home} >
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
