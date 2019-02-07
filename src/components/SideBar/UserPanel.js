import React, { Component } from 'react';
import { Label,Menu,Grid,Header,Icon,Dropdown,Modal,Form,Button,Input } from 'semantic-ui-react';
import { connect } from 'react-redux'
import firebase from 'firebase';
import * as actions from '../../actions';

class UserPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:null,
      modalIsOpen:false,
      channels:[],
      channelName:'',
      firstLoad:true,
      activeChannel:'',
    };
    this.channelsRef = firebase.database().ref('channels');
}

componentDidMount(){
  this.listenChannels();

}

  componentWillReceiveProps(nextProps){
    this.setState({user:nextProps.currentUser})
  }

  componentWillUnmount(){
    this.removeChannel()
  }

  openModal = () => {
    this.setState({modalIsOpen:true})
  }

  closeModal = () => {
    this.setState({modalIsOpen:false})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({channelName:'',channels:[...this.state.channels,this.state.channelName]})
    this.createChannel();
    this.closeModal();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }



  createChannel = (channel) => {
    const{channelName} = this.state
    const key = this.channelsRef.push().key;
    if(this.state.channelName){
      const newChannel = {
        name:channelName,
        id:key,
        createdBy:{
          name:this.props.currentUser.displayName
        }
      }
      this.channelsRef.child(key).update(newChannel)
      .then(() => {
        this.setState({channelName:''});
        this.closeModal();
        console.log("channel added")
      })
      .catch(err => {
        console.log(err)
      })
    }
  }


  listenChannels() {
  let channels=[]
  this.channelsRef.on('value',snapshot => {
    snapshot.forEach(snap => {
    })
    this.setState({channels:Object.values(snapshot.val())},() =>this.setFirstChannel())
  })
}

  setFirstChannel = () => {
    const firstChannel = this.state.channels[0]
    if(this.state.firstLoad && this.state.channels.length > 0) {
      this.props.selectChannel(firstChannel)
      this.setActiveChannel(firstChannel)
    }
    this.setState({firstLoad:false})
  }

  selectChannel = (channel) => {
    this.setActiveChannel(channel)
    this.props.selectChannel(channel)
  }

  setActiveChannel = (channel) => {
    this.setState({activeChannel: channel.id})
  }

  removeChannel(){
    this.channelsRef.off()
  }

  listChannels = channels =>
  channels.map(channel => (
    <Menu.Item
      key={channel.id}
      onClick={() => this.selectChannel(channel)}
    >
      # {channel.name}
    </Menu.Item>
  ));

  renderChannelName = () => {
    return this.state.activeChannel && this.props.selectedChannel.name
  }

  render() {

    const channels = this.state.channels
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row style={{padding:'1.2em'}}>
            <p onClick={this.props.openDrawer} style={{fontSize:"20px",fontWeight: 'bold',width:90,marginTop:"-10px",marginLeft: "210px"}}>#{this.state.activeChannel && this.props.selectedChannel.name}</p>
            <Header
              style={{marginTop:"-40px"}} inverted floated="left" as="h4">
              <Dropdown trigger = {
                <span
                  style={{margin:"20px"}}>
                  Chat-App<div style={{marginLeft: "20px"}}><Label circular color="green" />{this.state.user && this.props.currentUser.displayName}</div></span>}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.props.signOut} text="Sign Out"/>
                <Dropdown.Item text="Settings"/>
              </Dropdown.Menu>
              </Dropdown>
            </Header>

          </Grid.Row>
          <Header style={{margin:'20px'}}>
            CHANNELS({channels.length})
            <Modal
               style={{width:"600px",marginTop:"180px",marginLeft:"360px", height:"40vh"}}
               open={this.state.modalIsOpen}
               >
              <Modal.Content>
                <Header as="h1" textAlign="center">
                  Create a Channel
                </Header>
                <Form onSubmit={this.handleSubmit}>
                  <Input
                  fluid
                  style={{marginTop:"30px"}}
                  name="channelName"
                  placeholder="channel name"
                  value={this.state.channelName}
                  onChange={this.handleChange}
                   />
                 <Button onClick={this.handleSubmit}style={{marginTop:"60px",float:"right"}}>Create Channel</Button>
                </Form>
            </Modal.Content>
            </Modal>
          {this.listChannels(channels)}
          </Header>
          <div style={{marginLeft:"20px",fontSize:"15px",fontWeight: 'bold'}} onClick={this.openModal}>
            Add Channels<Icon name="plus"/>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return{
    currentUser:state.user.currentUser,
    selectedChannel:state.channel.selectedChannel
  }
}

export default connect(mapStateToProps,actions)(UserPanel);
