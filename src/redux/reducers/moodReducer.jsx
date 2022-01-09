import { SET_MOOD } from '../constantsType/actionType';

const INITIAL_STATE = {
  moodMode: 'chill',
};

const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MOOD:
      return {
        ...state,
        moodMode: action.moodMode,
      };
    default:
      return state;
  }
};

export default moodReducer;
