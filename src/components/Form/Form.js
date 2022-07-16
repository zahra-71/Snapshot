import React from 'react';
import { Divider } from '@mui/material';

// components
import Search from './components/Search';
import Navigation from './components/Navigation';

function Form({ handleSubmit }) {

  console.log("form")

  return (
    <div style={{marginBottom: "10px"}}>

        <Search clickHandler={handleSubmit} />
        <Navigation />
        <Divider />
        
    </div>
  )
}

export default Form