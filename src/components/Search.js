import React, { Fragment, useState, useContext } from 'react';
import { TextField, Button } from '../../node_modules/@material-ui/core';
import R6Context from '../r6Context/R6Context';

const Search = () => {
  const r6Context = useContext(R6Context);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      console.log('Please enter something');
    } else {
      r6Context.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <Fragment>
      <form onSubmit={onSubmit} className='form'>
        <TextField
          id='outlined-search'
          name='text'
          label='Search Users'
          value={text}
          type='text'
          variant='outlined'
          onChange={onChange}
        />

        <Button
          type='submit'
          color='primary'
          variant='contained'
          value='search'
        >
          Search
        </Button>
      </form>
      {r6Context.users.length > 0 && (
        <Button
          color='primary'
          variant='contained'
          onClick={r6Context.clearUsers}
        >
          Clear
        </Button>
      )}
    </Fragment>
  );
};

export default Search;
