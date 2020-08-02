import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = [];
  
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes red
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.red); //classes red, bold
  }


  return (
    <div className={classes.Cockpit}>
    <h1>Hi, I'm a React App</h1>
    <p className={assignedClasses.join(' ')}>This is really working!</p>
    <button
      className={btnClass}
      showPersons={props.showPersons}
      onClick={props.clicked}>
      Switch Name
    </button>
    </div>
  )
}

export default Cockpit;