import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import couple from './img/couple.jpeg';
import lake from './img/lake.jpeg';
import rome from './img/rome.jpeg';
import venice from './img/venice.jpeg';
import airport from './img/airport.jpg';
import market from './img/market.jpeg';
import train from './img/train.jpeg';
import vietnam from './img/vietnam.jpeg';
import van from './img/van.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-xs-12">
          <h2>Click the heart</h2>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={rome} title="Rome" message="Lorem ipsum dolor sit amet."/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={couple} title="Couple" message="Consectetur adipisicing elit" />
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={venice} title="Venice" message="Sed do eiusmod tempor incididunt ut"/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={lake} title="Lake" message="Labore et dolore magna aliqua."/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={vietnam} title="Vietnam" message="Ut enim ad minim veniam"/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={airport} title="Airport" message="Quis nostrud exercitation ullamco laboris"/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={market} title="Market" message="Nisi ut aliquip ex ea commodo consequat."/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={train} title="Train" message="Duis aute irure dolor in reprehenderit"/>
        </div>
        <div className="col-xs-12 col-md-4">
          <Card img={van} title="Van" message="In voluptate velit esse cillum dolore." />
        </div>
      </div>
    );
  }
}

export default App;
