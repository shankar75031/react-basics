import "./App.css";

import React, { Component } from "react";
import Person from "./Person/Person";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <Person />
      </div>
    );
  }
}
