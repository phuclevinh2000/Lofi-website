import { SET_RAIN } from '../constantsType/actionType';

const INITIAL_STATE = {
  rainMode: 'clear',
};

const rainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RAIN:
      return {
        ...state,
        rainMode: action.rainMode,
      };
    default:
      return state;
  }
};

export default rainReducer;
