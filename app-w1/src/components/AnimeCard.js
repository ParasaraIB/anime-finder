import React from "react";

class AnimeCard extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="col-4">
        <div className="card mt-3" style={{width: "20rem"}}>
          <img src={this.props.anime.image_url} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.anime.title}</h5>
            <p className="card-text text-justify">{this.props.anime.synopsis}</p>
            <div className="text-left">
              <a href={this.props.anime.url} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Details</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default AnimeCard;