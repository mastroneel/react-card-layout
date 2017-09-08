import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Card title="This is a card" />
      <Card title="This is also card" />
      </div>
    );
  }
}

export default App;
