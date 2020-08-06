import { ADD_FAVORITE, REMOVE_FAVORITE, FETCH_POKEMONS, SET_FETCH_POKEMON_LOADING } from './types'

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

export const setFetchPokemonLoading = (value) => {
      return {
            type: SET_FETCH_POKEMON_LOADING,
            payload: value
      }
}

export const fetchPokemon = (url) => {
      return (dispatch) => {
            async function fetchData() {
                  dispatch(setFetchPokemonLoading(true))
                  try {
                        const data = await (await fetch(url)).json()
                        dispatch({
                              type: FETCH_POKEMONS,
                              payload: data
                        })
                  } catch (error) {
                        console.log(error)
                  }
                  finally {
                        dispatch(setFetchPokemonLoading(false))
                  }
            }
            fetchData()
      }
}