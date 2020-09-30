export const addFavorites = (item) => {
  
  return {
    type: "ADD_FAVORITES",
    payload: item
  }

}

export const removeFavorites = (animeId) => {

  return {
    type: "REMOVE_FAVORITES",
    payload: animeId
  }

}