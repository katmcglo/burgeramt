import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Mer', age: 29 },
        { name: 'Mox', age: 20 }
      ], 
      otherState: 'some value'
    } 
  );

  console.log(personsState);
  
 //Updates Person state
  const switchNameHandler = () => {
    console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: 'Mero', age: 28 },
        { name: 'Mer', age: 29 },
        { name: 'Mox', age: 20 }
      ],
      otherState: personsState.otherState
    })
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={switchNameHandler}>Switch!</button>
      <Person age="30" name={personsState.persons[0].name} />
      <Person age="48" name={personsState.persons[1].name} />
      <Person age="45" name={personsState.persons[2].name}>Horny!!!</Person>
    </div>
);
  }

export default App;



