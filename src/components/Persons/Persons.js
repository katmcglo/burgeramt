import React, { PureComponent } from 'react';
import Person from '../Person/Person';


class Persons extends PureComponent {

  static getDerivedStateFromProps(props, state) {
    console.log('perosns.js getdervidedstatefromprorps');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('persons.js shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.clicked !== this.props.clicked
  //      )   {
  //     return true;
  //   } else {
  //     return false;};
  //   // return true;
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('persons.js getSnapshotBeforeUpdate');
    return { message: 'SNapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons.js componentdidupdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('Persons.js componentWillUnmount');
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.click(index)}
          changed={(event) => this.props.changed(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}

  export default Persons;
