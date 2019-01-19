import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom'
import { history } from './../store/configureStore';
import { connect } from 'react-redux';

import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import LandingPage from '../components/LandingPage';


const PrivateRoute = ({component: Component, authenticated, ...props}) => {
    return (
        <Route
            {...props}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    );
};

const PublicRoute = ({component: Component, authenticated, ...props}) => {
    return (
        <Route
            {...props}
            render={(props) => authenticated === false
                ? <Component {...props} />
              : <Redirect to='/home' />}
        />
    );
};


class App extends React.Component {


    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <div className="container">
                        <Route exact path="/" component={ LandingPage }/>
                        <PublicRoute authenticated={this.props.authenticated }  path="/signup" component={ Signup } />
                        <PublicRoute authenticated={this.props.authenticated }  path="/login" component={ Login } />
                        <PrivateRoute authenticated={this.props.authenticated }  path="/home" component={ Home } />
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(App);
