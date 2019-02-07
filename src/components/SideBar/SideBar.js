import React, { Component } from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Drawer from '../DrawerMenu';


class SideBar extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[],
      user:null
    }
    this.userRef = firebase.database().ref('users');
  }

  componentWillReceiveProps(nextProps){
    this.setState({user:nextProps.currentUser})
  }

  componentDidMount(){
    this.listenUsers()
  }

  listenUsers() {
    let users=[]
    this.userRef
      .on('value',snapshot => {
        snapshot.forEach(snap => {
          users.push(snap.val())
        })
        this.setState({users:Object.values(snapshot.val())})
      })
    }

    filterCurrenUser = () => {
      const {users} = this.state
      const userInList =users.includes(this.state.user && this.props.currentUser.displayName)
      if(userInList){
        return null
      }else{
        this.setState({users:[...this.state.users]})
      }
    }

    handleFilter = (currentUser) => {
      const {user} = this.state.user && this.props.currentUser.displayName

      if(currentUser !== user){
        this.setState(() => ({
          users:this.state.users.filter(u => u.includes(currentUser))
        }))
      }
    }

    listUser = users => {
      return users.map((user,key) => {
          return(
          <div key={user.name}>
            {user.name}
          </div>
        )
        })
      }




  render() {

    console.log(this.state.user && this.props.currentUser.displayName)
    const users = this.state.users
    return (
      <Menu style={{background:'#4d394b'}}  size="small" fixed="left" vertical>
        <UserPanel signOut={this.props.signOut} />
        <div style={{fontSize:"20px",marginLeft:"20px",marginTop:"50px"}}>
          {this.listUser(users)}
        </div>
        {this.props.toggleDrawer ?
        <Drawer selectedChannel={this.props.selectedChannel} /> : null
        }
      </Menu>
    );
  }
}

function mapStateToProps(state){
  return{
  currentUser:state.user.currentUser,
  toggleDrawer:state.drawer.drawerOpen,
  selectedChannel:state.channel.selectedChannel

  }
}


export default connect(mapStateToProps)(SideBar);
