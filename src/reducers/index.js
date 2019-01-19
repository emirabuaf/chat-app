import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import UserReducer  from './user';
import ChannelReducer from './channel';


const rootReducer = combineReducers({
  auth:AuthReducer,
  router:routerReducer,
  user:UserReducer,
  channel:ChannelReducer
})


export default rootReducer;
