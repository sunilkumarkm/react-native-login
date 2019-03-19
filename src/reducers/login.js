import { createSelector } from 'reselect';

export const types = {
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  LOGOUT: 'AUTH/LOGOUT'
};

export const initialState = {
  user: {},
  token: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };

    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload.user, token: action.payload.access_token };

    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case types.LOGOUT:
      return { ...state, user: {}, token: null };

    default:
      return state;
  }
};

export const actions = {
  login: values => ({ type: types.LOGIN_REQUEST, values }),
  logout: () => ({ type: types.LOGOUT })
};

// Selectors
const getAuth = state => state.auth;

export const getAuthState = createSelector(
  [getAuth],
  auth => {
    return auth;
  }
);
