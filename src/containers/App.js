import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      { id: 'person-33', name: 'Max', age: 28 },
      { id: 'person-1', name: 'Manu', age: 29 },
      { id: 'person-2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;
    

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )

      
    }

    
    
    return (
        <div className={classes.App}>
          <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
          {persons} 
        </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
