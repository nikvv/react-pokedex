import React from 'react'

import PokemonDetail from '../components/PokemonDetail.js'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'


export default function Detail() {
      const { id } = useParams()
      const {
            data: detail,
            loading,
      } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)


      if (loading) {
            return <h1 className="text-xl">LOADING. . . .</h1>
      }
      return (
            <div className="flex justify-center items-center">
                  {
                        !loading && <PokemonDetail detail={detail} />
                  }
            </div>
      )
}
