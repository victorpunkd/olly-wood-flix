import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Features } from "./Features/Features";
import { Genres } from "./Genres/Genres";
import { Platforms } from "./Platforms/Platforms";
import { TodaysFresh } from "./TodaysFresh/TodaysFresh";
import { Footer } from "./Footer/Footer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Features />
        <Genres />
        <Platforms />
        <TodaysFresh />
        <Footer />
      </div>
    );
  }
}

export default App;
