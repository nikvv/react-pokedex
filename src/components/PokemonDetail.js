import React from 'react'
import StatusBar from './StatusBar.js'
import useFetch from '../hooks/useFetch.js'

export default function PokemonDetail({detail}) {
      console.warn(detail)

      const {
            data: species,
            loading,
      } = useFetch(detail.species.url)
      
      console.warn(species);
      if(loading) return <h1>Loading.....</h1>
      
      return (
            
            <>
            {/* Container  */}
           <div className="lg:w-1/2 md:w-1/2 w-full mt-4 md:p-3">
                 {/* Card */}
                 <div className="w-full bg-gray-100 shadow-lg">

                 {/* Header */}
                 <div className="w-full bg-red-600 shadow">
                       <h2 className="text-lg text-gray-100 py-3 px-4 font-semibold capitalize">#{detail.id} {detail.name}</h2>
                 </div>
                 {/* Image */}
                  <div className="flex justify-center text-center mt-4">{
                        detail.types.map(data => {
                              const color = data.type.name === 'dragon' ? 'bg-indigo-600' : data.type.name === 'flying' ? 'bg-indigo-400' : data.type.name === 'poison' ? 'bg-purple-500' : data.type.name === 'grass' ? 'bg-green-400' : data.type.name === 'fire' ? 'bg-red-600' : data.type.name === 'water' ? 'bg-blue-400' : data.type.name === 'bug' ? 'bg-yellow-600 ' : data.type.name === 'electric' ? 'bg-yellow-400' : data.type.name === 'ground' ? 'bg-yellow-600' : data.type.name === 'psychic' ? 'bg-pink-400' : data.type.name === 'normal' ? 'bg-gray-500' : data.type.name === 'fairy' ? 'bg-pink-500' : data.type.name === 'fighting' ? 'bg-red-900' : data.type.name === 'rock' ? 'bg-yellow-700' : data.type.name === 'ghost' ? 'bg-purple-900' : data.type.name === 'ice' ? 'bg-teal-400' : data.type.name === 'steel' ? 'bg-gray-600' : ''
                              return <p className={`text-gray-200 font-semibold py-1 px-1 ml-2 w-20  rounded capitalize ${color}`}>{data.type.name}</p>
                        })
                        }</div>
                 <div className="text-center flex content-between justify-center mt-4">
                 <img className="display-block" src={detail.sprites.back_default} alt="pokemon"/>
                       <img className="display-block" src={detail.sprites.front_default} alt="pokemon"/>
                       
                 </div>

                 {/* Content Status */}
                 <div className="w-full p-6">
                       <p className="text-gray-600 text-right">Height: <span className="font-bold">{detail.height/10}</span>m</p>
                       <p className="text-gray-600 text-right">BaseEXP: <span className="font-bold">{detail.base_experience}</span> EXP</p>
                       <p className="text-gray-600 text-lg mt-4 px-4">{species.flavor_text_entries[1].flavor_text}</p>
                 {
                  
                 detail.stats.map((status,index) => (
                       <StatusBar key={index} status={status} />
                 ))
                 
                 }     
                 </div>
                 </div>
           </div>
           </>
           
      )
}
