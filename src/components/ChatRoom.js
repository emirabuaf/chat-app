import React, { Component } from 'react';
import { Responsive,Icon,Input,Segment } from 'semantic-ui-react';

import { connect } from 'react-redux'
import firebase from 'firebase';

import Message from './Message';
import '../styles/app.css';


class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      message: '',
      messages: [],
      loadedmessages:[]
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

listMessages = channels =>{
    return channels.map(messages => {
      return Object.keys(messages).map(key => {
        if(this.props.selectedChannel.id === messages[key].channel_id){
          return <Message
              key={messages[key].timeDetail}
              message={messages[key].message}
              userName={messages[key].userName}
            />
        }
      })
    })
  }

  render() {

    const {loadedmessages} =this.state
    return (
      <Responsive  minWidth={320} maxWidth={1969} className="form">
        <div className="chatroom" style={{height:300, width:'90%'}}>
          {this.listMessages(loadedmessages)}
        </div>
        <div className="input-button">
          <Input
            className="input-field"
            type="text"
            placeholder="type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        <Icon icon="send" className="send" onClick={this.handleSend} />
        </div>
    </Responsive>
    )};
  }

    function mapStateToProps(state){
      return{
      currentUser:state.user.currentUser,
      selectedChannel:state.channel.selectedChannel
      }
    }


export default connect(mapStateToProps)(ChatRoom);
