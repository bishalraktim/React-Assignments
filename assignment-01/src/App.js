import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Output from './Output/UserOutput';
import Input from './Input/UserInput';


class App extends Component {

  state = {
    name: [
      {firstUser: 'BR'}
    ],
    other: 'someValue'
  }

  nameChangeHandler = (updatedName) => {
    this.setState({
      name: [
        {firstUser: updatedName}
      ]
    });
  }

  eventHadler = (e) => {
    this.setState({
      name: [
        {firstUser: e.target.value}  
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      width: '35%',
      margin: '90px auto -16px',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <h1 style={style}>First React Assignment</h1>
        <Output
          username='Bishal R'
          newName={this.state.name[0].firstUser}
        />

        <Input
          newName={this.state.name[0].firstUser}
          click={this.nameChangeHandler.bind(this, 'Daniel Hamiltion!')}
          change={this.eventHadler}
        />
      </div>
    );
  }
}

export default App;
