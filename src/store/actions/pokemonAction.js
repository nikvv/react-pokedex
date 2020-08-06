import { ADD_FAVORITE, REMOVE_FAVORITE, FETCH_POKEMONS } from './types'

export const addFavorite = (pokemon) => {
      return {
            type: ADD_FAVORITE,
            payload: pokemon
      }
}

export const removeFavorite = (name) => {
      console.log(name, 'ACTION')
      return {
            type: REMOVE_FAVORITE,
            payload: name
      }
}


export const fetchPokemon = (url) => {
      return (dispatch) => {
            fetch(url)
                  .then(data => data.json())
                  .then(data => {
                        dispatch({
                              type: FETCH_POKEMONS,
                              payload: data
                        })
                  })
      }
}