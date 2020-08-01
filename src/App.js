import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


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
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes red
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes red, bold
    }

    
    return (
    
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton
            meow={this.state.showPersons}  
            onClick={this.togglePersonsHandler}>
            Switch Name
          </StyledButton>
          {persons} 
        </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
