import React, { Component } from "react";
import Person from "./Person/Person";
import style from "./App.module.css";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
class App extends Component {
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
    let btnClass = "";
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // <ErrorBoundary >
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                onNameChange={(event) =>
                  this.nameChangeHandler(event, person.id)
                }
              />
              // </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = style.Red;
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(style.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(style.bold);
    }
    return (
      <div className={style.App}>
        <h1>Hi, I am React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
