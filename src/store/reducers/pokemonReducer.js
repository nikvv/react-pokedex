import { FETCH_POKEMONS, SET_FETCH_POKEMON_LOADING } from '../actions/types'

const initialState = {
      data: [],
      loading: false
}

export default (state = initialState, action) => {
      switch (action.type) {

            case FETCH_POKEMONS:
                  return { loading: false, data: action.payload }
            case SET_FETCH_POKEMON_LOADING:
                  return { ...state, loading: action.payload }

            default:
                  return state
      }
}

