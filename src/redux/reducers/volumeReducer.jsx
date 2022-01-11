import { SET_VOLUME } from '../constantsType/actionType';

const INITIAL_STATE = {
  volumeValue: 50,
};

const volumeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volumeValue: action.volumeValue,
      };
    default:
      return state;
  }
};

export default volumeReducer;
