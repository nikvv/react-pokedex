import React from 'react'
import { useSelector } from 'react-redux'

import PokemonCard from '../components/PokemonCard.js'

export default function Favorites() {

      const pokemons = useSelector(state => state.pokemons)

      console.log()
      return (
            <div>
                  <h1 className="text-2xl">INI FAVORITES</h1>
                  <section className="flex flex-wrap">
                        {
                              pokemons && pokemons.map(pokemon => (
                                    < PokemonCard key={pokemon.name} pokemon={pokemon} />
                              ))
                        }
                  </section>
            </div>
      )
}
