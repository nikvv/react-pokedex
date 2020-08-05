import { ADD_FAVORITE } from "../actions/types.js"

const initializeState = {
      pokemons: [],
      loading: false
}

export default (state = initializeState, action) => {
      switch (action.type) {
            case ADD_FAVORITE:
                  return { loading: false, pokemons: [action.payload, ...state.pokemons] }
            default:
                  return state;
      }
}
