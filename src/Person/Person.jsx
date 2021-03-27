import React from "react";

export default function Person(props) {
  return (
    <div>
      I am {props.name} and I am {props.age}
      <p onClick={props.click}>{props.children}</p>
      <input
        type="text"
        name="name"
        onChange={props.onNameChange}
        value={props.name}
      />
    </div>
  );
}
