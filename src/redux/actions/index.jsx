import { auth, provider } from '../../firebase';
import { SET_USER, SET_MODE } from '../constantsType/actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setMode = (payload) => ({
  type: SET_MODE,
  mode: payload,
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
