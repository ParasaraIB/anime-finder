const initialState = {
  favorites: []
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "ADD_FAVORITES":
      const newState = {
        ...state,
        favorites: state.favorites.concat(action.payload)
      }
      return newState;
    case "REMOVE_FAVORITES": 
      const fileredFavorites = state.favorites.filter((favorite) => {
        return favorite.mal_id !== action.payload;
      });
      return {
        ...state,
        favorites: fileredFavorites
      }
    default:
      return state;
  }

}

export default reducer;