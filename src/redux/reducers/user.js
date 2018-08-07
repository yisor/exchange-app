import * as Types from '../actions/user'

const initialState = {
  userInfo: null,
}

const userReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: payload,
      };
    case Types.LOGIN:
      return {
        ...state,
        userInfo: null
      };
    default:
      return state;
  }
}

export default userReducer;
