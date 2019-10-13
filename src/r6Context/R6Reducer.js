import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
  CLEAR_LOADING
} from './Types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
