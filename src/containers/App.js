import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxillary";
import AuthContext from "../context/auth-context";
import classes from "./App.module.css";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    // Called after render & getSnapshotBeforeUpdate
    console.log("[App.js] componentDidMount");
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponetnUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponetnUpdate");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  render() {
    console.log("[App.js] render");

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          isAuthenticated={this.state.authenticated}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Auxillary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              login={this.loginHandler}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              title={this.props.appTitle}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App, classes.App);
