import React from 'react'

import {
      Link,
} from 'react-router-dom'

import { Context } from '../App.js'

export default function Navbar() {
      return (
            <Context.Consumer>
                  {
                        (({ value, setColor }) => (
                              <div className={`border-b-4 border-gray-900`}>
                                    <Link className="text-xl font-semibold" to="/">Home</Link>
                                    <span className="text-2xl mx-2">|</span>
                                    <Link className="text-xl font-semibold" to="/pokedex">Pokedex</Link>
                                    <span className="text-2xl mx-2">|</span>
                                    <Link className="text-xl font-semibold" to="/favorites">Favorites</Link>


                              </div>
                        ))
                  }
            </Context.Consumer>

      )
}
