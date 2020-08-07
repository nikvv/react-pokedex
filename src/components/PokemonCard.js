import React, { useContext } from 'react'

import useFetch from '../hooks/useFetch.js'

import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/actions/pokemonAction'

import {
      useHistory
} from 'react-router-dom'

import Loader from '../components/Loader'
import { Context } from '../App.js'

export default function PokemonCard({ pokemon }) {
      const favorites = useSelector(state => state.favoritePokemons.favoritePokemons)

      const dispatch = useDispatch()
      const history = useHistory()

      const {
            data: detail,
            loading,

      } = useFetch(pokemon.url)

      function toDetail(id) {
            history.push(`/pokemon/${id}`)
      }

      function addToFavorite(payload) {
            dispatch(addFavorite(payload))
      }
      function removeFromFavorite(payload) {
            dispatch(removeFavorite(payload))
      }
      const { value, setColor } = useContext(Context)
      if (loading) {
            return <Loader />
      }
      const hideButton = document.location.pathname === '/favorites' ? 'hidden' : ''
      let disabled = null
      const favorited = favorites.filter(pokemon => pokemon.name === detail.name);


      return (

            <>
                  {/* Container  */}
                  <div className="lg:w-1/4 md:w-1/2 w-full mt-4 md:p-3">
                        {/* Card */}
                        <div className="w-full bg-gray-100 shadow-lg">

                              {/* Header */}
                              <div className={`w-full shadow ${value}`}>
                                    <h2 className="text-lg text-gray-100 py-3 px-4 font-semibold capitalize">#{detail.id} {detail.name}</h2>
                              </div>
                              {/* Image */}
                              <div className="text-center">
                                    <img className="w-32 h-32 display-block mx-auto" src={detail.sprites.front_default} alt="pokemon" />
                              </div>

                              {/* Content Status */}
                              <div className="w-full p-6">
                              </div>
                              {/* Footer button */}
                              <footer className="w-full bg-blue-300">
                                    <button onClick={() => toDetail(detail.id)} className={`w-1/2 py-3 px-4 ${hideButton} bg-blue-200 hover:bg-blue-300 focus:outline-none text-blue-800 font-medium`}>Details</button>
                                    {
                                          favorited.length === 0 && <button onClick={() => addToFavorite(pokemon)} className={`w-1/2 py-3 px-4 ${hideButton} bg-yellow-200 hover:bg-yellow-300 focus:outline-none text-yellow-800 font-medium`}>Favorites</button>
                                    }
                                    {
                                          favorited.length > 0 && <button onClick={() => addToFavorite(pokemon)} className={`w-1/2 py-3 px-4 ${hideButton} opacity-75 cursor-not-allowed bg-yellow-100 hover:bg-yellow-200 focus:outline-none text-yellow-800 font-medium`}>Favorited</button>
                                    }
                                    {
                                          hideButton && <button onClick={() => removeFromFavorite(detail.name)} className={`w-full py-3 px-4 bg-red-200 hover:bg-red-300 focus:outline-none text-red-800 font-medium`}>Remove</button>
                                    }

                              </footer>
                        </div>
                  </div>
            </>
      )
}

