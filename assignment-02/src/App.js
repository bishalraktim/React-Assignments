import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  }

  changeHandler = (e) => {
    this.setState({
      inputText: e.target.value
    });
  }

  deleteCharsHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const textUpdated = text.join('');
    this.setState({inputText: textUpdated});
  }

  render() {

    const heading = {
      backgroundColor: 'yellow',
      width: '35%',
      margin: '90px auto 16px',
      cursor: 'pointer'
    }

    const chars = this.state.inputText.split('').map((ch, index) => {
      return (
        <Char
          chrs={ch}
          key={index}
          click={this.deleteCharsHandler.bind(this, index)}
        />
      );
    });

    return (
      <div className='App'>
        <h1 style={heading}>React Second Assignment</h1>
        <input
          type='text'
          onChange={this.changeHandler}
          value={this.state.inputText}
        />
        <p>{this.state.inputText}</p>

        <Validation textLength={this.state.inputText.length}/>
        {chars}
      </div>
    );

  }
}

export default App;
