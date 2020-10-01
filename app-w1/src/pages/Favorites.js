import React from "react";
import Swal from "sweetalert2";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFavorites } from "../store/actions"

const Favorites = () => {

  const favorites = useSelector((state) => state.favoriteReducer.favorites);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleClickDetails = (e, id) => {
    history.push(`/anime/${id}`);
  }

  const handleClickRemove = (e, id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFavorites(id));
        Swal.fire(
          'Removed!',
          'Removed Successfully!',
          'success'
        )
      }
    })
  }

  return (
    <div className="container mt-5">
      <h3 className="mt-5">Favorites</h3>
      <div className="row mt-5">
        {
          favorites.map((favorite) => {
            return (
              <div key={favorite.mal_id} className="col-sm-12 col-md-6 col-lg-4">
                <div className="card mt-3" style={{ width: "18rem" }}>
                  <img src={favorite.image_url} className="card-img-top" alt="favorite" style={{ height: "22rem" }} />
                  <div className="card-body">
                    <h5 className="card-title">{favorite.title}</h5>
                    {
                      favorite.synopsis ? (
                        <p className="card-text">Score: <span className="lead"><span className="badge badge-primary">{favorite.score}</span></span></p>
                      ) : (
                        <p className="card-text text-center">Start Date: <span className="lead"><span className="badge badge-primary">{favorite.start_date}</span></span></p>
                      )
                    }
                    <button className="btn btn-sm btn-dark" onClick={(e) => handleClickDetails(e, favorite.mal_id) }>Details</button>
                    <button className="btn btn-sm btn-danger ml-2" onClick={(e) => handleClickRemove(e, favorite.mal_id) }>Remove</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default Favorites;