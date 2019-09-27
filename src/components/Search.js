import React, { Fragment, useState, useContext } from 'react';
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '../../node_modules/@material-ui/core';
import R6Context from '../r6Context/R6Context';

const Search = () => {
  const r6Context = useContext(R6Context);

  // Component state for user and platform
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('uplay');

  const onSubmit = e => {
    e.preventDefault();
    // Checks to see if there is text in search field
    if (username === '') {
      console.log('Please enter something');
    }
    //This needs to be different because xbl names can have spaces
    else if (username.includes(' ')) {
      console.log('Names do not contain spaces');
    } else {
      r6Context.searchUsers(username, platform);
      setUsername('');
      setPlatform('uplay');
    }
  };

  // Sets username state with the value in search bar
  const textFieldOnChange = e => setUsername(e.target.value);
  // Sets platform with value of radio buttons
  const radioButtonOnChange = e => setPlatform(e.target.value);

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        {/* Search Bar */}
        <TextField
          id='outlined-search'
          name='text'
          label='Search Users'
          value={username}
          type='text'
          variant='outlined'
          onChange={textFieldOnChange}
        />
        {/* Radio Group for platform */}
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Platform</FormLabel>
          <RadioGroup
            defaultValue='uplay'
            aria-label='platform'
            name='platform-radios'
            row={true}
            onChange={radioButtonOnChange}
          >
            <FormControlLabel
              value='uplay'
              platform={platform}
              control={<Radio />}
              label='Uplay'
            />
            <FormControlLabel
              value='xbl'
              platform={platform}
              control={<Radio />}
              label='XBL'
            />
            <FormControlLabel
              value='psn'
              platform={platform}
              control={<Radio />}
              label='PSN'
            />
          </RadioGroup>
        </FormControl>
        {/* Submit Button */}
        <Button
          type='submit'
          color='primary'
          variant='contained'
          value='search'
        >
          Search
        </Button>
        {/* Clear button -- shows when users < 0 */}
        {r6Context.users.length > 0 && (
          <Button
            color='primary'
            variant='contained'
            onClick={r6Context.clearUsers}
          >
            Clear
          </Button>
        )}
      </form>
    </Fragment>
  );
};

export default Search;
