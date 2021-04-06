import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import classes from "./App.module.css";
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

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler}/>
       
    }
   
    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
