import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import UserReducer  from './user';
import ChannelReducer from './channel';
import DrawerReducer from './drawer';

const rootReducer = combineReducers({
  auth:AuthReducer,
  router:routerReducer,
  user:UserReducer,
  channel:ChannelReducer,
  drawer:DrawerReducer
})


export default rootReducer;
