import React from 'react'
import { useSelector } from 'react-redux'

import PokemonCard from '../components/PokemonCard.js'

export default function Favorites() {

      const favoritePokemons = useSelector(state => state.favoritePokemons)

      console.log()
      return (
            <div>
                  <h1 className="text-2xl">INI FAVORITES</h1>
                  <section className="flex flex-wrap">
                        {
                              favoritePokemons && favoritePokemons.map(pokemon => (
                                    < PokemonCard key={pokemon.name} pokemon={pokemon} />
                              ))
                        }
                  </section>
            </div>
      )
}
