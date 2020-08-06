import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types.js"

const initializeState = {
      favoritePokemons: [],
      loading: false
}

export default (state = initializeState, action) => {
      console.log(action)
      console.log(state)
      switch (action.type) {
            case ADD_FAVORITE:
                  return { loading: false, favoritePokemons: [action.payload, ...state.favoritePokemons] }
            case REMOVE_FAVORITE:
                  console.log('REDUCER REMOVE>>>>>>>>>>>>>>')
                  return { loading: false, favoritePokemons: state.favoritePokemons.filter(pokemon => pokemon.name !== action.payload) }
            default:
                  return state;
      }
}
