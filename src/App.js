import React, { useState } from 'react';

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

export const Context = React.createContext()

function App() {
  const [value, setValue] = useState('bg-red-600')

  return (
    <Context.Provider value={
      {
        value,
        setColor: (data) => setValue(data)
      }
    }>

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

    </Context.Provider >


  );
}

export default App;
