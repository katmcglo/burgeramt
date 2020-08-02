import React from 'react';
import classes from './Person.module.css';


const person = (props) => {

  return (
    <div className={classes.Person}>
      <h1 onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old!</h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default person;