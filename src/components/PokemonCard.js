import React, { Component } from "react";

import PokemonCardStatus from "./PokemonCardStatus.js";

export default class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      pokemonDetail: {},
    };
  }

  async componentDidMount() {
    let detail = await (await fetch(this.props.pokemon.url)).json();
    this.setState({
      pokemonDetail: detail,
    });
  }

  render() {
    const { pokemon } = this.props;
    const { pokemonDetail } = this.state;

    if (!pokemonDetail.stats) {
      console.log(pokemonDetail);
      return <h1 className="has-text-centered">LOADING........</h1>;
    } else {
      console.log(pokemonDetail);
      return (
        <div className="card">
          <header className="card-header has-background-light">
            <h1 className="card-header-title is-capitalized"><span className="has-text-weight-normal">#{pokemonDetail.id}-</span>{pokemon.name}</h1>
          </header>

          <div className="card-image has-text-centered">
            <img
              className="is-rounded"
              src={pokemonDetail.sprites.front_default}
              alt=""
            />
          </div>
          <div className="card-content">
            <div className="content">
              <p className='has-text-weight-semibold'>Base Stats</p>     
                             {
                              pokemonDetail.stats.map( (status,index) => {
                                    let percentage = (status.base_stat/160)*100
                                    console.warn(percentage);
                                  return <>
                                  <h4 className="is-size-6-desktop is-capitalized has-text-right" key={index}>{status.stat.name}: <span className="has-text-weight-bold">{status.base_stat}</span></h4>
                                  <progress
                                  className={`progress is-small is-light ${percentage <= 25 ? 'is-danger' : percentage <= 50 ? 'is-warning' : percentage <= 100 ? 'is-success' : ""}`}
                                  
                                  value={status.base_stat} max="160"></progress>
                                  </>
                              })
                              }
            </div>
          </div>
          <footer className="card-footer">
            <button className="card-footer-item button is-link is-light">
              Details
            </button>
            <button className="card-footer-item button is-warning is-light">
              Favorites
            </button>
          </footer>
        </div>
      );
    }
  }
}
