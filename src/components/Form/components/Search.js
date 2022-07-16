import { IconButton, styled, TextField, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';

const MyTextField = styled(TextField) (({ theme }) => ({
  marginTop: "-25px",
  "& .MuiInputBase-root": {
    backgroundColor: "white",
    borderRadius: "10px",
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#95C3D8',
    },
    '&:hover fieldset': {
      border: "2px solid #86BBD2"
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4C94CB',
    },
  },
}))

function Search({ clickHandler }) {

  console.log("search")
  const [searchInput, SetSearchInput] = useState("");

  const changeHandler = (e) => {
    SetSearchInput(e.target.value)
  }

  return (
    <>
      <MyTextField 
        value={searchInput}
        placeholder="جستجو..."
        onChange={changeHandler}
        InputProps={{
          endAdornment: (
            <IconButton onClick={ (e) => clickHandler(searchInput)}>
              <InputAdornment position="start">
              <SearchIcon sx={{color: "#86BBD2", "&: hover": {
                color: "#4C94CB"
              }}}/>
            </InputAdornment>
            </IconButton>
          )
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </> 
  )
}

export default React.memo(Search)