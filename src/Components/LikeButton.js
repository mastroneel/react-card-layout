import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

class LikeButton extends Component {
  constructor(){
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const button = this.state.liked ?
    <i className="fa fa-heart" aria-hidden="true"></i> :
    <i className="fa fa-heart-o" aria-hidden="true"></i>
    return (
      <div className="customContainer">
        <button onClick={this.handleClick}>
          {button}</button>
      </div>
    );
  }
}


export default LikeButton;
