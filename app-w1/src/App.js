import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./pages/Dashboard.js";
import ItemDetails from "./pages/ItemDetails.js";
import Favorites from "./pages/Favorites.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App text-center">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/anime/:id" component={ItemDetails} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
