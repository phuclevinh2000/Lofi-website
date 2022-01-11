import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, initialState } from '../reducers';

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export default store;
