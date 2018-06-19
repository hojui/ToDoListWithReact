import React, { Component } from 'react';
import Body from './Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.styleApp = {
      textAlign : 'center',
      padding : '20px',
      fontSize : '30px',
      backgroundColor : 'tomato',
      color : 'white',
      fontFamily : 'courier'
    };
  }
  render() {
    return (
      <div>
        <h1 style={this.styleApp}>ToDoListProject</h1>
        <Body />
      </div>
    );
  }
}

export default App;
