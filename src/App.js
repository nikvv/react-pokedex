import React, { Component } from 'react'
import PokemonCard from './components/PokemonCard.js'
import Hero from './components/Hero.js'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
    }
  }

  async componentDidMount() {
   let pokemons = await (await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151') ).json()
      this.setState({
        pokemons: pokemons.results
      })
  }
  render() {
    const {pokemons} = this.state
    // console.log(pokemons);
    if(!pokemons) {
      return <h1>LOADING</h1>
    }
    else{
    return (
      <section className="section has-background-light">
        <Hero />
        <div className="container">
        <div className="columns is-multiline">
             {
        pokemons.map(pokemon => (
          <div key={pokemon.name}  className="column is-2">
          <PokemonCard pokemon={pokemon} />
          </div>

        ))
        }
      </div>
        </div>
      </section>

    )
      }
  }
}
