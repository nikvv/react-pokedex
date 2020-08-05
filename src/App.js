import React from 'react';

import Hero from './components/Hero.js'
import PokemonList from './components/PokemonList.js'


function App() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto">
        <Hero />
        <PokemonList />
      </div>
    </div>

  );
}

export default App;
