import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="message__author">
          <strong>{this.props.message.userName}</strong>
        </div>

          {this.props.message.message}
      </div>
    )
  }
}
