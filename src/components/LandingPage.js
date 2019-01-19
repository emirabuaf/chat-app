import React from 'react';

import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class LandingPage extends React.Component{

 renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/home">Home</Link>
        </li>,
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render(){

        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
               <ul className="nav navbar-nav navbar-right">
                 { this.renderAuthLinks() }
               </ul>
            </div>
          </nav>
        );
      }
    }

    function mapStateToProps(state) {
      return {
        authenticated: state.auth.authenticated
      }
    }

    export default connect(mapStateToProps, Actions)(LandingPage);














// const LandingPage = ({authenticated}) => (
//   <div>{authenticated ? <LandingAuth /> : <LandingNonAuth />}</div>
// )
//
//
// const LandingNonAuth = () => (
//     <div>
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign Up</Link>
//     </div>
//   );
//
// const LandingAuth = () => (
//   <div>
//     <Link to="/home">home</Link>
//   </div>
// )
//
// function mapStateToProps(state){
//   return{
//     authenticated:state.auth.authenticated
//   }
// }
//
//
// export default connect(mapStateToProps)(LandingPage);
