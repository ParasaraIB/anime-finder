import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar.js";
import AnimeCard from "../components/AnimeCard.js";
// import { useFetchAnime } from "../services/hooks/useFetch.js";
import { fetchRecommendations, setTitle, fetchAnime } from "../store/actions";

function Dashboard() {
  
  // const { animes } = useFetchAnime();

  const dispatch = useDispatch();

  const recommended = useSelector((state) => state.recommended);
  useEffect(() => {
    const recommendationAction = fetchRecommendations();
    dispatch(recommendationAction);
  }, [dispatch]);

  const title = useSelector((state) => state.title);
  function getTitle(title) {
    console.log(title);
    dispatch(setTitle(title));
  }

  const animes = useSelector((state) => state.animes);
  useEffect(() => {
    const animesAction = fetchAnime();
    dispatch(animesAction);
  }, [dispatch, title]);

  const handleClickBack = (e) => {
    getTitle("");
  }

  return (
    <div>
      <h3 className="mt-5">YourAnimeList.Net</h3>
      <div className="container text-left">
      <i className="fas fa-arrow-left" style={{ cursor: "pointer" }} onClick={(e) => handleClickBack(e)}></i>
      </div>
      <SearchBar
      onSubmit={getTitle}
      />
      <div className="container mt-5">
        {animes.length ? (
          <div>
            <h4 className="mb-5">Results for: <span className="lead"><span className="badge badge-primary">{title}</span></span></h4>
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
            <h4 className="mb-5">Recommendations</h4>
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