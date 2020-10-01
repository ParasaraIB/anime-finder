import {
  SET_TITLE,
  FETCH_RECOMMENDATIONS,
  FETCH_ANIME,
  FETCH_BY_ID
} from "../actionTypes.js";

const initialState = {
  recommended: [],
  animes: [],
  title: "",
  anime: null
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title
      }
    case FETCH_RECOMMENDATIONS:
      return {
        ...state,
        recommended: action.recommended
      }
    case FETCH_ANIME:
      return {
        ...state,
        animes: action.animes
      }
    case FETCH_BY_ID:
      return {
        ...state,
        anime: action.anime
      }
    default:
      return state;
  }
}

export default animeReducer;