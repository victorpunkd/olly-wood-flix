import React, { Component } from "react";
import "./Genres.css";
import { GenreCard } from "../GenreCard/GenreCard";

export class Genres extends Component {
  render() {
    return (
      <div className="genres">
        <div className="w3-row-padding">
          <div className="headingGenre">
            <i class="fa fa-chevron-circle-right w3-text-pink"></i> Find by
            genres
          </div>
          <div className="m3 s6 w3-col">
            <GenreCard
              genrePicture="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/horrorback.jpg"
              genreName="Horror"
            />
          </div>
          <div className="m3 s6 w3-col">
            <GenreCard
              genrePicture="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/thriller.jpg"
              genreName="Thriller"
            />
          </div>
          <div className="m3 s6 w3-col">
            <GenreCard
              genrePicture="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/sci-fi.jpg"
              genreName="Sci-Fi"
            />
          </div>
          <div className="m3 s6 w3-col">
            <GenreCard genrePicture="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/horrorback.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
