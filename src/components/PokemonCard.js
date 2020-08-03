import React, { Component } from 'react'

import PokemonCardStatus from './PokemonCardStatus.js'

export default class PokemonCard extends Component {
      constructor() {
            super()
            this.state = {
              pokemonDetail: {},
            }
          }

      async componentDidMount() {
            let detail = await (await fetch(this.props.pokemon.url) ).json()
            this.setState({
              pokemonDetail: detail
            })
        }

      render() {
            const { pokemon } = this.props
            const { pokemonDetail } = this.state

            if(!pokemonDetail.stats){
                  console.log(pokemonDetail);
                  return <h1>LOADING........</h1>
                  
            }
            else{
                  console.log(pokemonDetail);
            return (
                  <div className="card">
                        <header className="card-header">
                        <h1 className="card-header-title is-capitalized">{pokemon.name}</h1>
                        </header>

                        <div className="card-image has-text-centered">
                              <img src={pokemonDetail.sprites.front_default} alt=""/>
                        </div>
                        <div className="card-content">
                              <div className="content">     
                             {
                              pokemonDetail.stats.map( (status,index) => {
                                  return <h4 className="is-size-7 is-capitalized has-text-right" key={index}>{status.stat.name}: <span className="has-text-weight-bold      ">{status.base_stat}</span></h4>
                              })
                              }
                              </div>
                        </div>
                        <div className="card-footer">
                              <button className="card-footer-item button is-link is-light">Details</button>
                              <button className="card-footer-item button is-warning is-light">Favorites</button>
                        </div>
                        </div>
            )
                        }
      }
}

