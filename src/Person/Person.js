import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
    width: 60%;
    margin: auto;
    border: 1px solid #ffffff;
    box-shadow: 0 2px 3px #330003;
    padding: 16px;
    margin-bottom: 0.5vh;


    @media (min-width: 500px) {
      width: 450px;
    }
  `

const person = (props) => {

  return (
    //<div className="Person" style={style}>
    <StyledDiv>
      <h1 onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old!</h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
  );
}

export default person;