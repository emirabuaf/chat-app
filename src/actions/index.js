import firebase from 'firebase/app';
import 'firebase/auth'; // This line is important
import 'firebase/database'; // This line is important


export const AUTH_USER = "AUTH_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

const config = {
  apiKey: "AIzaSyCHQAfMk80sgGJygf02I6qIvyahvIZFPRA",
  authDomain: "chat-app3-43770.firebaseapp.com",
  databaseURL: "https://chat-app3-43770.firebaseio.com",
  projectId: "chat-app3-43770",
  storageBucket: "chat-app3-43770.appspot.com",
  messagingSenderId: "760270788173"
};
firebase.initializeApp(config);


export function selectChannel(channel){
  return{
    type:SELECT_CHANNEL,
    payload:{
      selectedChannel:channel
    }
  }
}

export function clearUser(){
  return{
    type:CLEAR_USER
  }
}

export function setUser(user) {
  return{
    type:SET_USER,
    payload:{
      currentUser:user
    }
  }
}

// export function signUpUser(credentials) {
//     return function(dispatch) {
//         firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
//             .then(response => {
//                 dispatch(authUser());
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch(authError(error));
//             });
//     }
// }
//
//
//   export function signInUser(credentials) {
//       return function(dispatch) {
//           firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
//               .then(response => {
//                   dispatch({type:'LOGIN_SUCCESS'});
//               })
//               .catch(error => {
//                   dispatch({type:'LOGIN_ERROR',error});
//               });
//       }
//   }


  export function signOutUser() {
      return function (dispatch) {
        firebase.auth().signOut()
        .then(() =>{
          dispatch({
          type: SIGN_OUT_USER
        })
      });
    }
  }

export function verifyAuth() {
    return function (dispatch) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOutUser());
            }
        });
    }
}

export function authUser(){
  return{
    type:AUTH_USER
  }
}

// export function authError(error) {
//     return {
//         type: AUTH_ERROR,
//         payload: error
//     }
// }