import React from 'react';
import Dashboard from "./pages/Dashboard.js";
import ItemDetails from "./pages/ItemDetails.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App text-center">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/anime/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
