import { ADD_FAVORITE, REMOVE_FAVORITE } from './types'

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