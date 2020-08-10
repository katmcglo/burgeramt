import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';


class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
  console.log('Person.js rendering')
  return (
    <Aux>
      <p onClick={this.props.click}>Hi, I'm {this.props.name} and I am {this.props.age} years old!</p>
      <p key="i2">{this.props.children}</p>
      <input
      key="i3" 
      type="text" 
      onChange={this.props.changed} 
      value={this.props.name}
      ref={this.inputElementRef}
      // ref={(inputEl) => {this.inputElement = inputEl}}
      />
    </Aux>
  );
}
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);