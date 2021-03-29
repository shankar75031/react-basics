import "./App.css";

import React, { Component } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export default class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Anna",
        age: 21,
      },
      {
        id: "2",
        name: "Prabhashankar",
        age: 22,
      },
      {
        id: "3",
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  onNameChange={(event) =>
                    this.nameChangeHandler(event, person.id)
                  }
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}
