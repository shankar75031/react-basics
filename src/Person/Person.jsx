import React from "react";

export default function Person(props) {
  return (
    <div>
      I am {props.name} and I am {props.age}
      <p onClick={props.click}>{props.children}</p>
    </div>
  );
}
