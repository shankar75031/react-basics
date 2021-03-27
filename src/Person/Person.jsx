import React from "react";

export default function Person(props) {
  return (
    <div>
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
