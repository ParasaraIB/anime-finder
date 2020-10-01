import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useFetchById } from "../services/hooks/useFetch.js";
import { useParams, useHistory } from "react-router-dom";
import { fetchById } from "../store/actions"

const ItemDetails = () => {

  const { id } = useParams();
  console.log(id);
  const history = useHistory();
  console.log(history);

  const dispatch = useDispatch();

  // const { data: anime } = useFetchById(
  //   `https://api.jikan.moe/v3/anime/${id}`
  // );

  const anime = useSelector((state) => state.anime);
  useEffect(() => {
    const animeAction = fetchById(`https://api.jikan.moe/v3/anime/${id}`)
    dispatch(animeAction);
  }, [dispatch, id]);

  const handleClickBack = (e) => {
    history.goBack();
  }

  return (
    <div className="container">
      <div className="text-left mt-5">
        <i className="fas fa-arrow-left" style={{ cursor: "pointer" }} onClick={(e) => handleClickBack(e)}></i>
      </div>
      {anime === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className="mt-5">Anime Details</h3>
          <div className="row mt-5">
            <div className="col-sm-12 col-lg-4">
              <div className="card" style={{ width: "18rem "}}>
                <img src={anime.image_url} className="card-img-top" alt="details" style={{height: "22rem"}} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-8">
              <h4>{anime.title}</h4>
              <div className="text-left mt-3">
                <p>Title (Japanese): {anime.title_japanese}</p>
                <p>Type: {anime.type}</p>
                <p>Source: {anime.source}</p>
                <p>Rating: {anime.rating}</p>
                <p>Score: {anime.score}</p>
                <p>Aired: {new Date(anime.aired.from).toISOString().split("T")[0]}</p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="text-justify">
                <p><span className="font-weight-bold">Synopsis: </span>{anime.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

}

export default ItemDetails;