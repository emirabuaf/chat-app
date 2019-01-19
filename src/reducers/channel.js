import {SELECT_CHANNEL} from '../actions';


const initialState = {
  selectedChannel:null,
}

export default function channel(state = initialState ,action){
  switch (action.type) {
    case SELECT_CHANNEL:
    return{
      ...state,
      selectedChannel:action.payload.selectedChannel
    }
    default:
    return state;
}
}
