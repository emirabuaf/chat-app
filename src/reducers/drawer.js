import { TOGGLE_DRAWER,CLOSE_DRAWER } from '../actions';

const initialState = {
  drawerOpen:false
}

export default function drawer (state=initialState,action){
  switch(action.type){
    case TOGGLE_DRAWER:
      return{
        ...state,drawerOpen:true
      };
    case CLOSE_DRAWER:
      return{
        ...state,drawerOpen:false
      }
    default:
      return state;
  }
}
