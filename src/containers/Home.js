import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import ChatRoom from '../components/ChatRoom';
import SideBar from '../components/SideBar/SideBar';
import firebase from 'firebase';
import 'firebase/auth';

class Home extends Component {

componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      this.props.setUser(user);
    }else{
      this.props.clearUser();
    }
  })
};

  handleSignOut = () =>{
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
      <SideBar  signOut={this.handleSignOut} />
      <ChatRoom />
      </div>
  );
  }
}


export default connect(null,Actions)(Home);
