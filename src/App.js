import "./App.css";

import React, { useState } from "react";
import Person from "./Person/Person";

export default function App(props) {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "Anna",
        age: 21,
      },
      {
        name: "Elsa",
        age: 22,
      },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: "Sangeetha",
          age: 21,
        },
        {
          name: "Prabhashankar",
          age: 22,
        },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <h1>Hi i am react app</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Singing
      </Person>
    </div>
  );
}
