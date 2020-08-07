import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      { id: 'person-33', name: 'Max', age: 28 },
      { id: 'person-1', name: 'Manu', age: 29 },
      { id: 'person-2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedstatefromproprs');
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount rendering');
  }

  shouldComponentUpdate() {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

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

    this.setState((prevState, props) => {
      return {
      persons: persons, 
      changeCounter: prevState.changeCounter + 1
      };
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('App.js render');

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
        <Aux className={classes.App}>
          <button onClick={() => {this.setState({showCockpit: false})}}>Remove cockpit</button>
          {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          personsLength={this.state.persons.length}
          /> : null}
          {persons} 
        </Aux>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
