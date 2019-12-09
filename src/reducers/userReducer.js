import {
  LOGIN_SUCCESSFUL,
  REGISTER_SUCCESSFUL,
  LOGOUT,
} from '../actions/userActions';

const initialState = { isLoggedIn: false, user: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL:
      return { isLoggedIn: true, user: action.response.id };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
