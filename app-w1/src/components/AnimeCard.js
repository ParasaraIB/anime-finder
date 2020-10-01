import React from "react";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../store/actions";

function AnimeCard(props) {

  const history = useHistory();

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favoriteReducer.favorites);

  const handleClickDetails = () => {
    history.push(`/anime/${props.anime.mal_id}`);
  }

  const handleClickFavorites = (e, item) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Added to Favorites'
    });
    dispatch(addFavorites(item));
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card mt-3" style={{width: "18rem"}}>
        <img src={props.anime.image_url} className="card-img-top" alt="" style={{height: "22rem"}} />
        <div className="card-body">
          <h5 className="card-title">{props.anime.title}</h5>
          {props.anime.synopsis ? (
            <p className="card-text">Score: <span className="lead"><span className="badge badge-primary">{props.anime.score}</span></span></p>
          ) : (
            <p className="card-text text-center">Start Date: <span className="lead"><span className="badge badge-primary">{props.anime.start_date}</span></span></p>
          )}
          <div className="text-center">
            <button 
              className="btn btn-sm btn-dark"
              onClick={handleClickDetails}
            >Details</button>
            {
              favorites.find((favorite) => favorite.mal_id === props.anime.mal_id) ? (
                <button className="btn btn-sm btn-danger ml-2" disabled>+ Favorite</button>
              ) : (
                <button
                  className="btn btn-sm btn-danger ml-2"
                  onClick={(e) => handleClickFavorites(e, props.anime)}
                >+ Favorite
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )

}

export default AnimeCard;