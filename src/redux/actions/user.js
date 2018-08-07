export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = payload => ({
  type: LOGIN,
  payload
})

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
})