import React, { Component } from "react";
import "./NavBar.css";
import logo from "./tv.png";

export class NavBar extends Component {
  render() {
    return (
      <div className="navBar w3-bar">
        <div className="w3-row">
          <div className="w3-half w3-text-white">
            <span className="name">
              <i class="fa fa-bars w3-hide-large" aria-hidden="true"></i>
              <img src={logo} className="logo" alt="" /> Olly Wood Flix
            </span>
          </div>
          <div className="w3-half menu w3-hide-small">
            <span className="navBarItem">Login</span>
            <span className="navBarItem">About</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
