import React, { useReducer } from 'react';
import axios from 'axios';
import R6Context from './R6Context';
import R6Reducer from './R6Reducer';
import { SEARCH_USERS, GET_USER, CLEAR_USERS, SET_LOADING } from './Types';

const R6State = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(R6Reducer, initialState);

  // Search all users on Uplay
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://r6tab.com/api/search.php?platform=uplay&search=${text}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.results
    });
  };

  // Get single user with player id
  const getUser = async userid => {
    setLoading();

    const res = await axios.get(
      `https://r6tab.com/api/player.php?p_id=${userid}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <R6Context.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {props.children}
    </R6Context.Provider>
  );
};

export default R6State;