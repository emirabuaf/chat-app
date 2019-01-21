import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="message__author">
          <strong>{this.props.userName}</strong>
        </div>

          {this.props.message}
      </div>
    )
  }
}
