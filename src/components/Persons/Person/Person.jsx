import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering");

    return (
      <div className={classes.Person}>
        <h1 onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </h1>
        <p>{this.props.children}</p>
        <input
          type="text"
          name="name"
          onChange={this.props.onNameChange}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
