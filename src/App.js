import React, { Component } from 'react';
import './App.scss';
import Guest from './components/Guest';

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  render(){
    return (
      <div className="App">
        <Guest />
      </div>
    );
  }  
}

export default App;
