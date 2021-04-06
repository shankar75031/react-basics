import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  // Pass empty array as 2nd arg to use it as componentDidMount
  // Pass array of variables to execute it as componentDidMount and also when those variables changes
  // Return a callback for first arg function to handle componentDidUnmount
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleButtonRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup in 2nd useEffect");
    };
  }, [props.personsLength]);

  let btnClass = "";
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
