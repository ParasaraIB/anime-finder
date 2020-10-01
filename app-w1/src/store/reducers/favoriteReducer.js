import { ADD_FAVORITES, REMOVE_FAVORITES } from "../actionTypes.js";

const initialState = {
  favorites: []
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      const newState = {
        ...state,
        favorites: state.favorites.concat(action.item)
      }
      return newState;
    case REMOVE_FAVORITES: 
      const fileredFavorites = state.favorites.filter((favorite) => {
        return favorite.mal_id !== action.animeId;
      });
      return {
        ...state,
        favorites: fileredFavorites
      }
    default:
      return state;
  }
}

export default favoriteReducer;