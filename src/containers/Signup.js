import React, {Component} from 'react';
import { Grid,Form,Segment,Button} from 'semantic-ui-react';
import firebase from 'firebase';




class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: null,
    };
    this.userRef = firebase.database().ref('users');
  }


  onChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  onSubmit = event => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(newUser => {
      console.log(newUser);
      newUser.user.updateProfile({
        displayName:this.state.username
      })
      .then(() => {
        this.saveUser(newUser).then(() => {
          console.log("user saved")
        })
      })
    })

    .catch(err => {
      console.log(err)
    })
  }

  saveUser = newUser => {
    return this.userRef.child(newUser.user.uid).set({
      name:newUser.user.displayName
    })
  }

  render() {
    const {username,password,email,passwordConfirmation} = this.state

    const isInvalid = password !==passwordConfirmation ||
    password === '' ||
    email === '' ||
    username ==='';

    return (
      <Grid style={{height:"100vh"}} textAlign="center" verticalAlign="middle" className="signup-form">
      <Grid.Column style={{maxWidth:450}}>
        <Form size="large" onSubmit={this.onSubmit}>
          <Segment>
            <Form.Input
              name="username"
              placeholder="username"
              value={username}
              onChange={this.onChange}/>
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
              <Form.Input
                name="passwordConfirmation"
                placeholder="password confirmation"
                value={passwordConfirmation}
                type="password"
                onChange={this.onChange}/>
              <Button disabled={isInvalid}>Sign Up</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    );
  }
}


export default Signup;
