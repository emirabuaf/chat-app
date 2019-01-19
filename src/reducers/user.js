import { SET_USER, CLEAR_USER } from '../actions';

const initialState ={
  currentUser:null
}

export default function user(state = initialState,action){
  switch(action.type){
    case SET_USER:
    return{
      currentUser:action.payload.currentUser
    }
    case CLEAR_USER:
    return{
      ...state
    }
    default:
    return state;
  }
}
