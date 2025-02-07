import React, { Component } from 'react';
import styled from 'styled-components';
import SmurfsList from './SmurfsList/SmurfsList';
import SmurfsForm from './SmurfsForm/SmurfsForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <StyledApp className="ui container">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList />
        <SmurfsForm />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  margin: 24px 0;
`

export default App;
