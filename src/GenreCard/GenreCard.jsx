import React, { Component } from "react";
import "./GenreCard.css";

export class GenreCard extends Component {
  render() {
    return (
      <div className="genreCard w3-display-container">
        <img
          className="genrePicture"
          src={this.props.genrePicture}
          style={{ width: "100%" }}
          alt=""
        />
        <div className="w3-display-middle genreName">
          {this.props.genreName}
        </div>
      </div>
    );
  }
}

export default GenreCard;
