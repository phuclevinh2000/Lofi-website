import { SET_MODE } from '../constantsType/actionType';

const INITIAL_STATE = {
  mode: 'day',
};

const modeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default modeReducer;
