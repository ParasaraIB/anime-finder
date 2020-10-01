const initialState = {
  favorites: [],
  recommended: [],
  animes: [],
  title: "",
  anime: null
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "ADD_FAVORITES":
      const newState = {
        ...state,
        favorites: state.favorites.concat(action.item)
      }
      return newState;
    case "REMOVE_FAVORITES": 
      const fileredFavorites = state.favorites.filter((favorite) => {
        return favorite.mal_id !== action.animeId;
      });
      return {
        ...state,
        favorites: fileredFavorites
      }
    case "SET_TITLE":
      return {
        ...state,
        title: action.title
      }
    case "FETCH_RECOMMENDATIONS":
      return {
        ...state,
        recommended: action.recommended
      }
    case "FETCH_ANIME":
      return {
        ...state,
        animes: action.animes
      }
    case "FETCH_BY_ID":
      return {
        ...state,
        anime: action.anime
      }
    default:
      return state;
  }

}

export default reducer;