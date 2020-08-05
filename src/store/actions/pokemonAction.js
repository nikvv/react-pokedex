import { ADD_FAVORITE } from './types'

export const addFavorite = (pokemon) => {
      return {
            type: ADD_FAVORITE,
            payload: pokemon
      }
}