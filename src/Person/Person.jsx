import React from "react";
import Radium from "radium";
import "./Person.css";

function Person(props) {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };

  return (
    <div className="Person" style={style}>
      <h1 onClick={props.click}>
        I am {props.name} and I am {props.age}
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

export default Radium(Person);
