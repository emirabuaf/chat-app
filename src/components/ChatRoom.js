import React, { Component } from 'react';
import Message from './Message';
import { connect } from 'react-redux'
import firebase from 'firebase';
import '../styles/app.css';


class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      message: '',
      messages: [],
    };
    this.messageRef = firebase.database().ref('messages');
  }
componentDidMount(){
  this.listenMessages()
}

  componentWillReceiveProps(nextProps) {
      this.setState({userName: nextProps.currentUser});
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }



  handleSend = () => {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName && this.props.currentUser.displayName,
        message: this.state.message,
        id:this.props.currentUser.uid,
        timeDetail:firebase.database.ServerValue.TIMESTAMP,
        channel_id:this.props.selectedChannel.id
      }
      this.messageRef.child(this.props.selectedChannel.id).push().set(newItem)
      .then(() => {
        this.setState({message:''})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }


  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }

  listenMessages() {
    let loadedmessages=[]
    this.messageRef
      .on('value',snapshot => {
        snapshot.forEach(snap => {
          loadedmessages.push(snap.val())
          console.log(loadedmessages)
        })
        this.setState({loadedmessages:Object.values(snapshot.val())})
      })
}

  listMessages = messages =>
  messages.length >0 && messages.map(message => (
    <Message
      key={message.timeDetail}
      message={message}
      userName={this.props.currentUser}
    />
  ));

  render() {
    const {messages} =this.state
    return (
      <div className="form">
        <div className="chatroom" style={{height:300, width:'90%'}}>
          {this.listMessages(messages)}
        </div>
          <input
            className="send-message"
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        <button onClick={this.handleSend}>Send</button>
      </div>
    )};
  }

    function mapStateToProps(state){
      return{
      currentUser:state.user.currentUser,
      selectedChannel:state.channel.selectedChannel
      }
    }


export default connect(mapStateToProps)(ChatRoom);
