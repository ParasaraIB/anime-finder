import React from "react";
import { useHistory } from "react-router-dom";

function AnimeCard(props) {

  let history = useHistory();

  const handleClick = () => {
    history.push(`/anime/${props.anime.mal_id}`);
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card mt-3" style={{width: "18rem"}}>
        <img src={props.anime.image_url} className="card-img-top" alt="" style={{height: "22rem"}} />
        <div className="card-body">
          <h5 className="card-title">{props.anime.title}</h5>
          {props.anime.synopsis ? (
            <p className="card-text">Score: <span className="lead"><span className="badge badge-danger">{props.anime.score}</span></span></p>
          ) : (
            <p className="card-text text-center">Start Date: <span className="lead"><span className="badge badge-danger">{props.anime.start_date}</span></span></p>
          )}
          {/* <div className="text-center">
            <a href={props.anime.url} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Details</a>
          </div> */}
          <div className="text-center">
            <button 
              className="btn btn-sm btn-dark"
              onClick={handleClick}
            >Details</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AnimeCard;