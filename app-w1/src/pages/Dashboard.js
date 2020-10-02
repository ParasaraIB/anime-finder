import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../components/SearchBar.js";
import AnimeCard from "../components/AnimeCard.js";
import { fetchRecommendations, setTitle, fetchAnime } from "../store/actions";

function Dashboard() {
  
  const dispatch = useDispatch();

  const recommended = useSelector((state) => state.animeReducer.recommended);
  useEffect(() => {
    const recommendationAction = fetchRecommendations();
    dispatch(recommendationAction);
  }, [dispatch]);

  const title = useSelector((state) => state.animeReducer.title);
  function getTitle(title) {
    dispatch(setTitle(title));
  }

  const animes = useSelector((state) => state.animeReducer.animes);
  useEffect(() => {
    const animesAction = fetchAnime();
    dispatch(animesAction);
  }, [dispatch, title]);

  const handleClickBack = (e) => {
    getTitle("");
  }

  return (
    <div>
      <h3 className="mt-5" data-testid="app-title">YourAnimeList.Net</h3>
      <div className="container text-left">
      <i className="fas fa-arrow-left" style={{ cursor: "pointer" }} onClick={(e) => handleClickBack(e)}></i>
      </div>
      <SearchBar
      onSubmit={getTitle}
      />
      <div className="container mt-5" data-testid="animes-container">
        {animes.length ? (
          <div>
            <h4 className="mb-5" data-testid="results-heading">Results for: <span className="lead"><span className="badge badge-primary">{title}</span></span></h4>
            <div className="row">
              {animes.map((anime) => {
                return (
                  <AnimeCard 
                  key={anime.mal_id}
                  anime={anime}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h4 className="mb-5" data-testid="recommendation-heading">Recommendations</h4>
            <div className="row">
              {recommended.map((anime) => {
                return (
                  <AnimeCard 
                  key={anime.mal_id}
                  anime={anime}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard;