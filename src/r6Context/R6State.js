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

  // Search users with username and platform
  const searchUsers = async (username, platform) => {
    setLoading();

    const res = await axios.get(
      `https://r6tab.com/api/search.php?platform=${platform}&search=${username}`
    );

    // Conditional for if matching players were found
    if (res.data.totalresults === 0) {
      console.log('No players found');
    } else {
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.results
      });
    }
  };

  // Get single user with player id
  const getUser = async props => {
    setLoading();

    const res = await axios.get(
      `https://r6tab.com/api/player.php?p_id=${props}`
    );

    // Conditional for if a player was found or not
    if (res.data.playerfound === true) {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } else {
      // Another place where i need to throw an error
      console.log('No player found');
    }
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
