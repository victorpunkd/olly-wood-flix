import React, { Component } from "react";
import "./FeatureCard.css";

export class FeatureCard extends Component {
  render() {
    return (
      <div className="featureCard w3-row">
        <div className="w3-third w3-col s3">
          <img
            className="moviePoster w3-img"
            src={this.props.moviePoster}
            alt="The Platform"
          />
        </div>
        <div className="w3-rest w3-col s9 movieDescription">
          <div className="movieName">
            {this.props.movieName + " "}
            <span className="movieYear">({this.props.movieYear})</span>
          </div>
          <div className="movieGenre">
            <span>Horrors</span>
            <span>, Fantasy</span>
            <span> | {this.props.movieLanguage}</span>
          </div>
          <div className="moviePlot">
            A young girl risks everything to prevent a powerful, multinational
            company from kidnapping her best friend - a fascinating beast named
            Okja
          </div>
          <div className="w3-row movieRatingToWatch">
            <div className="w3-quarter s4 w3-col">
              <img
                src="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/imdb_png.png"
                className="imdbLogo"
                alt=""
              />
              <span className="imdbRating">
                {this.props.movieIMDBRating}{" "}
                <span>
                  <i class="fa fa-star w3-text-yellow"></i>
                </span>
              </span>
            </div>
            <div className="w3-rest s8 w3-col whereToWatch">
              <span>
                <img
                  src="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/netflix_png.png"
                  className="netflixLogo"
                  alt=""
                />
              </span>
              {/*<span>
                <img
                  src="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/prime_video.png"
                  className="primeLogo"
                  alt=""
                />
              </span>*/}
              {/*<span>
                <img
                  src="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/hotstar_png.png"
                  className="hotstarLogo"
                  alt=""
                />
              </span>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
