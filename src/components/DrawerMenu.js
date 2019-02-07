import React, { Component } from 'react';
import { Label,Menu,Grid,Header,Icon,Dropdown,Modal,Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import AnimateHeight from 'react-animate-height';

class Drawer extends Component {

  state= {
    height:0,
  };

  toggle = () => {
    const {height} = this.state;
    this.setState({
      height: height === 0 ? 'auto' : 0,
    })
  }


  render() {

    const {height} = this.state
    return (
      <Menu size='massive' style={{overflow:"scroll",marginTop: -436,marginLeft: 950,height:600}} vertical>
        <Menu.Item style={{height:50,marginTop:10}}>
          <Icon onClick={this.props.closeDrawer} size="large" name="close" style={{marginTop:-10,marginRight:20}} />
          About
        </Menu.Item>
      <Divider />
        <div>
         <Menu.Item style={{height:50,marginTop:10}} onClick={ this.toggle }>
          Channel Details <Icon name="angle right" />
         </Menu.Item>
         <AnimateHeight
           duration={ 500 }
           height={ height }
         >
           <h1>Your content goes here</h1>
           <p style={{fontSize:14}}>Purpose A place for non-work-related flimflam, faffing,
              hodge-podge or jibber-jabber you'd prefer to keep out
              of more focused work-related channels.</p>
            <div>
              Created
            </div>
         </AnimateHeight>
       </div>
      <Divider />
        <div>
          <Menu.Item onClick={ this.toggle } style={{height:50,marginTop:10}} name='spam' >
            Highlights <Icon name="angle right" />
          </Menu.Item>
          <AnimateHeight
            duration={ 500 }
            height={ height }
          >
            <h1>Your content goes here</h1>
            <p>Put as many React or HTML components here.</p>
          </AnimateHeight>
        </div>
      <Divider />
        <div>
          <Menu.Item onClick={ this.toggle } style={{height:50,marginTop:10}} name='updates' a >
            Members <Icon name="angle right" />
          </Menu.Item>
          <AnimateHeight
            duration={ 500 }
            height={ height }
          >
            <h1>Your content goes here</h1>
            <p>Put as many React or HTML components here.</p>
          </AnimateHeight>
        </div>
      </Menu>
      );
    };
  }

  function mapStateToProps(state){
    return{
      selectedChannel:state.channel.selectedChannel
    }
  }

export default connect(mapStateToProps,actions)(Drawer);
