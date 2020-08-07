import React, { useContext } from 'react'

import { Context } from '../App.js'
export default function Hero() {

      const { value, setColor } = useContext(Context)
      return (
            <section className="py-12 text-left font-serif">
                  <div className="w-full max-w-2xl">
                        <h2 className="text-5xl mt-2 mb-6 leading-tight font-heading">Kanto Pokedex</h2>
                        <div className="text-sm font-semibold">Pokemon Data</div>

                        <button onClick={() => setColor('bg-red-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-red-200  rounded capitalize`}>Red</button>
                        <button onClick={() => setColor('bg-orange-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-orange-200  rounded capitalize`}>orange</button>
                        <button onClick={() => setColor('bg-yellow-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-yellow-200  rounded capitalize`}>yellow</button>
                        <button onClick={() => setColor('bg-green-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-green-200  rounded capitalize`}>green</button>
                        <button onClick={() => setColor('bg-teal-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-teal-200  rounded capitalize`}>teal</button>
                        <button onClick={() => setColor('bg-blue-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-blue-200  rounded capitalize`}>blue</button>
                        <button onClick={() => setColor('bg-indigo-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-indigo-200  rounded capitalize`}>indigo</button>
                        <button onClick={() => setColor('bg-purple-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-purple-200  rounded capitalize`}>purple</button>
                        <button onClick={() => setColor('bg-pink-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-pink-200  rounded capitalize`}>Pink</button>
                        <button onClick={() => setColor('bg-gray-600')} className={`text-blue-900 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-gray-400  rounded capitalize`}>gray</button>
                        <button onClick={() => setColor('bg-black')} className={`text-blue-100 font-semibold py-1 px-1 ml-2 mt-4 w-20 bg-black  rounded capitalize`}>black</button>
                  </div>
            </section>

      )
}
