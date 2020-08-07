import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('cockpit.js useeffect');
    setTimeout(() => {
      alert('saved data to cloud!');
    }, 1000);
    return () => {
      console.log('COckpit.js cleanup');
    }
  }, []);

  useEffect(() => {
    console.log('Cockpit.js 2nd useEffect');
    return () => {
      console.log('Cockpit.js cleanup work in 2nd useEffect');
    }
  });

  //useEffect();

  const assignedClasses = [];
  let btnClass = [];
  
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes red
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.red); //classes red, bold
  }


  return (
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
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

export default React.memo(Cockpit);