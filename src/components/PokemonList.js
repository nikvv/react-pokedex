import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from './PokemonCard.js'
import Loader from './Loader.js'
import { fetchPokemon } from '../store/actions/pokemonAction'

// Hooks
// import useFetch from '../hooks/useFetch.js'

export default function PokemonList() {
      const dispatch = useDispatch()
      // const {
      //       data: pokemons,
      //       loading,
      // } = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      const pokemons = useSelector(state => state.allPokemons.data)
      console.log(pokemons)
      useEffect(() => {
            dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/?limit=151`))
      }, [])

      // if (loading) return <Loader />
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
