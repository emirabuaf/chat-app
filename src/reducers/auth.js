import {AUTH_USER,
   LOGIN_SUCCESS,
   SIGN_OUT_USER
 } from '../actions';

const initialState = {
  authenticated:false,
  authError:null
}

export default function auth (state=initialState,action){
  switch(action.type) {
    case AUTH_USER:
    return{
      ...state,
      authenticated:true,
      authError:null
    };
    case SIGN_OUT_USER:
    return{
      ...state,
       authenticated:false,
       authError:null
    };
    case LOGIN_SUCCESS:
    console.log('login success');
    return{
      ...state,
      authError:null
    }
    default:
      return state;
  }
}
