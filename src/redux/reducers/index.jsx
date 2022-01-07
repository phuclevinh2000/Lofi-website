import { combineReducers } from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
