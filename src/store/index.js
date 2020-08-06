
import { createStore } from 'redux'
import favoritePokemons from "./reducers/pokemonReducer"

const store = createStore(favoritePokemons)

export default store;