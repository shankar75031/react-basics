import "./App.css";

import React, { Component } from "react";
import Person from "./Person/Person";

export default class App extends Component {
  state = {
    persons: [
      {
        name: "Anna",
        age: 21,
      },
      {
        name: "Prabhashankar",
        age: 22,
      },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 21,
        },
        {
          name: "Prabhashankar",
          age: 22,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button
          onClick={() => {
            this.switchNameHandler("Snowman");
          }}
        >
          Switch name
        </button>
        <h1>Hi i am react app</h1>
        <Person
          click={() => this.switchNameHandler("Sangeetha")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Maalaagha
        </Person>
        <Person
          click={this.switchNameHandler.bind(this, "Kunjoonj")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Singing
        </Person>
      </div>
    );
  }
}
