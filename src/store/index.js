
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favoritePokemons from "./reducers/favoriteReducer"
import allPokemons from "./reducers/pokemonReducer"

const reducers = combineReducers({
      favoritePokemons,
      allPokemons
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;