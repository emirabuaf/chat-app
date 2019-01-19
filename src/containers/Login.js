import React, {Component} from 'react';
import { Grid,Form,Segment,Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import firebase from 'firebase';




class Login extends Component {

  state={
  email:'',
  password:''
  }

  onChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  onSubmit = values => {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(signedInUser => {
      console.log(signedInUser)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const {password,email} = this.state

    const isInvalid = password === '' || email === '';

    return (
      <Grid style={{height:"100vh"}} textAlign="center" verticalAlign="middle" className="signup-form">
          <Grid.Column style={{maxWidth:450}}>
            <Form size="large" onSubmit={this.onSubmit}>
              <Segment>
                  <Form.Input
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.onChange}/>
                  <Form.Input
                    name="password"
                    placeholder="password"
                    value={password}
                    type="password"
                    onChange={this.onChange}/>
                  <Button disabled={isInvalid}>Login</Button>
            </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.authError
  }
}

export default connect(mapStateToProps, Actions)(Login);
