import { combineReducers } from 'redux';

import userReducer from './userReducer';
import modeReducer from './modeReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  modeState: modeReducer,
});

export default rootReducer;
