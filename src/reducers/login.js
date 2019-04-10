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
  error: null,
  employeeList: {
    user: [
      {
        id: 1,
        name: 'test1',
        age: '11',
        gender: 'male',
        email: 'test1@gmail.com',
        phoneNo: '9415346313'
      },
      {
        id: 2,
        name: 'test2',
        age: '12',
        gender: 'male',
        email: 'test2@gmail.com',
        phoneNo: '9415346314'
      },
      {
        id: 3,
        name: 'test3',
        age: '13',
        gender: 'male',
        email: 'test3@gmail.com',
        phoneNo: '9415346315'
      },
      {
        id: 4,
        name: 'test4',
        age: '14',
        gender: 'male',
        email: 'test4@gmail.com',
        phoneNo: '9415346316'
      },
      {
        id: 5,
        name: 'test5',
        age: '15',
        gender: 'male',
        email: 'test5@gmail.com',
        phoneNo: '9415346317'
      },
      {
        id: 6,
        name: 'test6',
        age: '16',
        gender: 'male',
        email: 'test6@gmail.com',
        phoneNo: '9415346318'
      }
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.access_token
      };

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

