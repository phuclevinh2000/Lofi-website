import { auth, provider } from '../../firebase';
import {
  SET_USER,
  SET_MODE,
  SET_RAIN,
  SET_MOOD,
  SET_VOLUME,
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
} from '../constantsType/actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setMode = (payload) => ({
  type: SET_MODE,
  mode: payload,
});

export const setRain = (payload, value) => ({
  type: SET_RAIN,
  rainMode: payload,
  rainValue: value,
});

export const setMood = (payload) => ({
  type: SET_MOOD,
  moodMode: payload,
});

export const setVolume = (payload) => ({
  type: SET_VOLUME,
  volumeValue: payload,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then((payload) => {
        dispatch(setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function changeDayNight(currentStatus) {
  let status;
  if (currentStatus === 'day') status = 'night';
  else if (currentStatus === 'night') status = 'day';
  return (dispatch) => {
    dispatch(setMode(status));
  };
}

export function changeRainStatus(currentStatus, value) {
  let rainStatus;
  if (currentStatus === 'rain') rainStatus = 'clear';
  else if (currentStatus === 'clear') rainStatus = 'rain';
  return (dispatch) => {
    dispatch(setRain(rainStatus, value));
  };
}

export function changeMoodStatus(currentStatus) {
  return (dispatch) => {
    dispatch(setMood(currentStatus));
  };
}

export function changeVolume(currentStatus) {
  return (dispatch) => {
    dispatch(setVolume(currentStatus));
  };
}

export const addList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD,
    payload: {
      name: name,
      complete: false,
    },
  });
  // save to local storage as listItems
  localStorage.setItem(
    'listItems',
    JSON.stringify(getState().todoItems.todoList)
  );
};

export const removeList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE,
    payload: name,
  });
  localStorage.setItem(
    'listItems',
    JSON.stringify(getState().todoItems.todoList)
  );
};

export const addDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD_DONE,
    payload: {
      name: name,
      complete: true,
    },
  });
  localStorage.setItem(
    'listItems',
    JSON.stringify(getState().todoItems.todoList)
  );
};

export const removeDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE_DONE,
    payload: {
      name: name,
      complete: false,
    },
  });
  localStorage.setItem(
    'listItems',
    JSON.stringify(getState().todoItems.todoList)
  );
};
