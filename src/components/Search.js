import React, { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardContent
} from '../../node_modules/@material-ui/core';
import R6Context from '../r6Context/R6Context';

const Search = () => {
  const styles = {
    cardStyle: {
      width: '60%',
      margin: '0 auto',
      textAlign: 'center'
    }
  };

  // Bringing in context
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
      setPlatform(platform);
    }
  };

  // Sets username state with the value in search bar
  const textFieldOnChange = e => setUsername(e.target.value);
  // Sets platform with value of radio buttons
  const radioButtonOnChange = e => setPlatform(e.target.value);

  return (
    <Card style={styles.cardStyle}>
      <CardContent>
        <form onSubmit={onSubmit}>
          {/* Search Bar */}
          <TextField
            label='Search Users'
            value={username}
            variant='outlined'
            onChange={textFieldOnChange}
          />
          {/* Radio Group for platform */}
          <CardContent>
            <FormControl component='fieldset'>
              <FormLabel>Platform</FormLabel>
              <RadioGroup
                defaultValue={platform}
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
                  label='Xbox Live'
                />
                <FormControlLabel
                  value='psn'
                  platform={platform}
                  control={<Radio />}
                  label='PSN'
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
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
      </CardContent>
    </Card>
  );
};

export default Search;
