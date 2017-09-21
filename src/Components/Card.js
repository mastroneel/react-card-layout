import React, { Component } from 'react';
import LikeButton from './LikeButton';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img style={{width: 300, height: 200}} src={this.props.img} alt="Header" />
        <br />
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>

        <LikeButton />
      </div>
    );
  }
}

export default Card;
