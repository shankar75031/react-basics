import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

export default function Cockpit(props) {
  // Pass empty array as 2nd arg to use it as componentDidMount
  // Pass array of variables to execute it as componentDidMount and also when those variables changes
  // Return a callback for first arg function to handle componentDidUnmount
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("SAVED TO CLOUD");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup");
    };
  }, [props.persons]);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup in 2nd useEffect");
    };
  }, [props.persons]);

  let btnClass = "";
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}
