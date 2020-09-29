import React from "react";

function AnimeCard(props) {

  return (
    <div className="col-4">
      <div className="card mt-3" style={{width: "18rem"}}>
        <img src={props.anime.image_url} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.anime.title}</h5>
          {props.anime.synopsis ? (
            <p className="card-text text-justify">{props.anime.synopsis}</p>
          ) : (
            <p className="card-text text-center">Start Date: <span className="lead"><span className="badge badge-danger">{props.anime.start_date}</span></span></p>
          )}
          <div className="text-center">
            <a href={props.anime.url} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Details</a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AnimeCard;