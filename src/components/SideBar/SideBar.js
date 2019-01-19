import React, { Component } from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';


class SideBar extends Component {



  render() {
    return (
      <Menu style={{background:'#4d394b'}}  size="small" fixed="left" vertical>
        <UserPanel signOut={this.props.signOut} />
      </Menu>
    );
  }

}

export default SideBar;
