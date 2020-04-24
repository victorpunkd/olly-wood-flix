import React, { Component } from "react";
import "./Platforms.css";
import { PlatformCard } from "../PlatformCard/PlatformCard";

export class Platforms extends Component {
  render() {
    return (
      <div className="platforms w3-row-padding">
        <div className="headingPlatform">
          <i class="fa fa-chevron-circle-right w3-text-pink"></i> Find by
          Platform
        </div>
        <div className="w3-third">
          <PlatformCard logoImage="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/netflix_big_logo.png" />
        </div>
        <div className="w3-third">
          <PlatformCard logoImage="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/prime_big_logo.jpg" />
        </div>
        <div className="w3-third">
          <PlatformCard logoImage="https://ollywoodflix-files.s3.ap-south-1.amazonaws.com/hotstart_big_logo.jpg" />
        </div>
      </div>
    );
  }
}

export default Platforms;
