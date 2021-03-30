import React from "react";
import styles from "./Person.module.css";
import styled from "styled-components";

function Person(props) {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };

  return (
    // <div className="Person" style={style}>
    <div className={styles.Person}>
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

export default Person;
