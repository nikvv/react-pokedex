import React from 'react'

import useFetch from '../hooks/useFetch.js'

import { useDispatch } from 'react-redux'
import { addFavorite } from '../store/actions/pokemonAction'

import {
      useHistory
} from 'react-router-dom'

import Loader from '../components/Loader'

export default function PokemonCard({ pokemon }) {
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
      if (loading) {
            return <Loader />
      }
      const hideButton = document.location.pathname === '/favorites' ? 'hidden' : ''
      return (

            <>
                  {/* Container  */}
                  <div className="lg:w-1/4 md:w-1/2 w-full mt-4 md:p-3">
                        {/* Card */}
                        <div className="w-full bg-gray-100 shadow-lg">

                              {/* Header */}
                              <div className="w-full bg-red-600 shadow">
                                    <h2 className="text-lg text-gray-100 py-3 px-4 font-semibold capitalize">#{detail.id} {detail.name}</h2>
                              </div>
                              {/* Image */}
                              <div className="text-center">
                                    <img className="display-block mx-auto" src={detail.sprites.front_default} alt="pokemon" />
                              </div>

                              {/* Content Status */}
                              <div className="w-full p-6">
                              </div>
                              {/* Footer button */}
                              <footer className="w-full bg-blue-300">
                                    <button onClick={() => toDetail(detail.id)} className={`w-1/2 py-3 px-4 ${hideButton} bg-blue-200 hover:bg-blue-300 text-blue-800 font-medium`}>Details</button>
                                    <button onClick={() => addToFavorite(pokemon)} className={`w-1/2 py-3 px-4 ${hideButton} bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-medium`}>Favorites</button>
                              </footer>
                        </div>
                  </div>
            </>
      )
}

