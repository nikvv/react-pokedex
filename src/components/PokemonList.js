import React from 'react'
import PokemonCard from './PokemonCard.js'

// Hooks
import useFetch from '../hooks/useFetch.js'

export default function PokemonList() {
      const { 
            data: pokemons, 
            loading, 
            error, 
          } = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=151")

      return (
            <section className="flex flex-wrap">
            {
                 pokemons.results && pokemons.results.map(pokemon => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                  ))
            }
            </section>
      )
}
