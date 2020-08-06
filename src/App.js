import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Home,
  Pokedex,
  Detail,
  Favorites
} from "./pages"

import Navbar from './components/Navbar.js'



function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pokedex">
              <Pokedex />
            </Route>

            <Route path="/pokemon/:id">
              <Detail />
            </Route>


            <Route path="/favorites">
              <Favorites />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;
