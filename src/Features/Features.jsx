import React, { Component } from "react";
import "./Features.css";
import { FeatureCard } from "../FeatureCard/FeatureCard";

export class Features extends Component {
  render() {
    return (
      <div className="features w3-row-padding">
        <div className="heading">
          <i class="fa fa-chevron-circle-right w3-text-pink"></i> Todays
          Featured Movies
        </div>
        <div className="w3-third">
          <FeatureCard
            movieName="The Platform"
            movieYear="2019"
            movieLanguage="Spanish"
            movieIMDBRating="7.2"
            moviePoster="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/picture.jpg"
          />
        </div>
        <div className="w3-third">
          <FeatureCard
            movieName="Midsommar"
            movieYear="2019"
            movieLanguage="English"
            movieIMDBRating="7.1"
            moviePoster="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/picture2.jpg"
          />
        </div>
        <div className="w3-third">
          <FeatureCard
            movieName="Okja"
            movieYear="2018"
            movieLanguage="English"
            movieIMDBRating="8.0"
            moviePoster="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/picture3.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Features;
