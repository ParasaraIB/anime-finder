import React, { useState ,useEffect } from "react"
import axios from "axios";
import SearchBar from "../components/SearchBar.js";
import AnimeCard from "../components/AnimeCard.js";

// class Dashboard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       animes: []
//     }
//   }

//   componentDidUpdate() {
//     axios({
//       method: "GET",
//       url: `https://api.jikan.moe/v3/search/manga?q=${this.state.title}&page=1`
//     })
//       .then(({ data }) => {
//         this.setState({
//           animes: data.results
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }

//   getTitle(title) {
//     this.setState({
//       title: title
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3 className="mt-5">YourAnimeList.Net</h3>
//         <SearchBar
//          onSubmit={(title) => this.getTitle(title)}
//         />
//         {/* <pre>{JSON.stringify(this.state.animes, null, 2)}</pre> */}
//         <div className="container mt-5">
//           <div className="row">
//             {this.state.animes.map((anime) => {
//               return (
//                 <AnimeCard 
//                  key={anime.mal_id}
//                  anime={anime}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     )
//   }

// }

// export default Dashboard

function Dashboard() {
  
  const [ state, setState ] = useState({
    title: "",
    animes: []
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v3/search/anime?q=${state.title}&page=1`
    })
      .then(({ data }) => {
        setState({
          ...state,
          animes: data.results
        });
      })
      .catch((err) => {
        console.log(err);
      })  
  }, [state.title])

  function getTitle(title) {
    setState({
      ...state,
      title: title
    })
  }

  return (
    <div>
      <h3 className="mt-5">YourAnimeList.Net</h3>
      <SearchBar
       onSubmit={(title) => getTitle(title)}
      />
      {/* <pre>{JSON.stringify(this.state.animes, null, 2)}</pre> */}
      <div className="container mt-5">
        <div className="row">
          {state.animes.map((anime) => {
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