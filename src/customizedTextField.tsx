import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

export default function CustomizedTextField() {

  const SearchButton = () => (
  <IconButton>
    <SearchIcon />
  </IconButton>
  )

  return (
     <TextField
        id="standard-name"
        label="type your question here"
        InputProps={{endAdornment: <SearchButton />}}
      />
  );
}