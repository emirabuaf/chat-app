import React, { Component } from 'react';
import { Divider,Button,Responsive,Icon,Input,Segment } from 'semantic-ui-react';

import { connect } from 'react-redux'
import firebase from 'firebase';

import Message from './Message';
import '../styles/app.css';
import logo from '../slack-chat.jpg';


class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      message: '',
      messages: [],
      loadedmessages:[]
    };
    this.messageRef = firebase.database().ref('messages')
  }
componentDidMount(){
  this.listenMessages();
  this.scrollToBottom();
}

componentDidUpdate(){
  this.scrollToBottom();
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

  scrollToBottom = () => {
     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  listenMessages() {
    let loadedmessages=[]
    this.messageRef
      .on('value',snapshot => {
        snapshot.forEach(snap => {
          loadedmessages.push(snap.val())
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
        <div style={{width:1200,marginTop:'30px',marginLeft:'100px',backgroundColor: 'gray'}}>
          <img style={{height:100,width:480,marginLeft: 350,marginTop:60}} src={logo} alt="Logo" />
        </div>
          <p style={{marginTop:'15px',fontSize:'20px',fontWeight:'bold',marginLeft:550}}>Bring your team into Slack</p>
          <p style={{marginTop:'15px',fontSize:'20px',marginLeft:380}}>Slack is better with teammates - Invite them to start collaborating</p>
          <Button style={{marginTop:'5px',marginLeft:620}} size="small" color='green'>Add People</Button>
        <Divider style={{width:1200,marginLeft:"100px"}}  section />
        <div className="chatroom" style={{height:300, width:'90%'}}>
          <div style={{marginBottom: 140}}>
        {this.listMessages(loadedmessages)}
        </div>
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>

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
          <span ref={el => (this.bottomSpan = el)} />

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
