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
      {
        name: "Pootham",
        age: 22,
      },
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 21,
        },
        {
          name: "Prabhashankar",
          age: 22,
        },
        {
          name: "Pootham",
          age: 22,
        },
      ],
    });
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: "Anna",
          age: 21,
        },
        {
          name: newName,
          age: 22,
        },
        {
          name: "Pootham",
          age: 22,
        },
      ],
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            onNameChange={this.nameChangeHandler}
            click={this.switchNameHandler.bind(this, "Snowman")}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            My Hobbies: Dancing
          </Person>
          <Person
            click={this.switchNameHandler.bind(this, "Kunjoonj")}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            My Hobbies: Singing
          </Person>

          <Person
            click={this.switchNameHandler.bind(this, "Kunjoonj")}
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          >
            My Hobbies: Sitting idle
          </Person>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}
