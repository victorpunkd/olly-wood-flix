import React, { Component } from "react";
import "./PlatformCard.css";

export class PlatformCard extends Component {
  render() {
    return (
      <div className="platformCard w3-card">
        <div>
          <img className="logoImage" src={this.props.logoImage} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default PlatformCard;
