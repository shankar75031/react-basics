import React, { Component } from "react";
import PropTypes from "prop-types";
import Auxillary from "../../../hoc/Auxillary";
import withClass from "../../../hoc/withClass";

import classes from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] rendering");

    return (
      <Auxillary>
        <h1 onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </h1>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          name="name"
          onChange={this.props.onNameChange}
          value={this.props.name}
        />
      </Auxillary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  onNameChange: PropTypes.func,
};

export default withClass(Person, classes.Person);
