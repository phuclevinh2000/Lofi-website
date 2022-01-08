import { combineReducers } from 'redux';

import userReducer from './userReducer';
import modeReducer from './modeReducer';
import rainReducer from './rainReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  modeState: modeReducer,
  rainState: rainReducer,
});

export default rootReducer;
