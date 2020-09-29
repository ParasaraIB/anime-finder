import React from "react"
import SearchBar from "../components/SearchBar.js";
import AnimeCard from "../components/AnimeCard.js";
import { useFetchAnime, useFetchRecommendations } from "../services/hooks/useFetch.js";

function Dashboard() {
  
  const { title, animes, setTitle } = useFetchAnime();

  const { recommended } = useFetchRecommendations();

  function getTitle(title) {
    setTitle(title);
  }

  return (
    <div>
      <h3 className="mt-5">YourAnimeList.Net</h3>
      <SearchBar
      //  onSubmit={(title) => getTitle(title)}
      onSubmit={getTitle}
      />
      {/* <pre>{JSON.stringify(state.animes, null, 2)}</pre> */}
      <div className="container mt-5">
        {animes.length ? (
          <div>
            <h4 className="mb-5">Results for: <span className="lead"><span className="badge badge-danger">{title}</span></span></h4>
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