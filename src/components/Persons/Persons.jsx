import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps");
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    // Decides whether the component should update or not
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Called after render. Don't manipulate DOM here. Useful for getting scroll position of user etc.
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Hello" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  //   componentWillReceiveProps(props) {
  //     console.log("[Persons.js] componentWillReceiveProps");
  //   }

  render() {
    console.log("[Persons.js] rendering");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          onNameChange={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
