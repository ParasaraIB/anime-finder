import axios from "axios";

import {
  ADD_FAVORITES, 
  REMOVE_FAVORITES,
  SET_TITLE,
  FETCH_RECOMMENDATIONS,
  FETCH_ANIME,
  FETCH_BY_ID
} from "../actionTypes.js";

export const addFavorites = (item) => {

  return {
    type: ADD_FAVORITES,
    item
  }

}

export const removeFavorites = (animeId) => {

  return {
    type: REMOVE_FAVORITES,
    animeId
  }

}

export const setTitle = (title) => {

  return {
    type: SET_TITLE,
    title
  }

}

export const fetchRecommendations = () => {

  return (dispatch, getState) => {
    const page = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    fetch(`https://api.jikan.moe/v3/top/anime/${page}/upcoming`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_RECOMMENDATIONS,
          recommended: data.top
        });
      })
  }

}

export const fetchAnime = () => {

  return (dispatch, getState) => {
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v3/search/anime?q=${getState().animeReducer.title}&page=1`
    })
      .then(({ data }) => {
        dispatch({
          type: FETCH_ANIME,
          animes: data.results
        });
      })
  }

}

export const fetchById = (apiUrl) => {

  return (dispatch, getState) => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: FETCH_BY_ID,
          anime: data
        });
      })
  }

}