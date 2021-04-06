import React from "react";
import classes from "./Person.module.css";

function Person(props) {
  console.log("[Person.js] rendering");

  return (
    <div className={classes.Person}>
      <h1 onClick={props.click}>
        I'm {props.name} and I am {props.age}
      </h1>
      <p>{props.children}</p>
      <input
        type="text"
        name="name"
        onChange={props.onNameChange}
        value={props.name}
      />
    </div>
  );
}

export default Person;
