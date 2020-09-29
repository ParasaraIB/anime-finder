import React, { useState ,useEffect } from "react"
import axios from "axios";
import SearchBar from "../components/SearchBar.js";
import AnimeCard from "../components/AnimeCard.js";

function Dashboard() {
  
  const [ title, setTitle ] = useState("");
  const [ animes, setAnimes ] = useState([]);

  useEffect(() => {
    console.log("asd");
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v3/search/anime?q=${title}&page=1`
    })
      .then(({ data }) => {
        setAnimes(data.results);
      })
      .catch((err) => {
        console.log(err);
      })  
  }, [title])

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
    </div>
  )
}

export default Dashboard;