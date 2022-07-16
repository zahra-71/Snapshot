import React from 'react';
import { Container, Typography, styled } from '@mui/material';
import { useLocation } from 'react-router';

// components
import Gallery from './Gallery';

const MyTypography = styled(Typography) (({ theme }) => ({
  "& 	.MuiTypography-root": {
    textColor: "#393F2C"
  }
}))

function Items({searchTerm}) {
  // console.log(searchTerm)
  const location = useLocation();
  var path = (location.pathname).split("/");
  decodeURI(path[2])

  return (
      <Container>
          <MyTypography color="#393F2C" variant="h6">{searchTerm}</MyTypography>
          <Gallery search={path[2]? decodeURI(path[2]) : searchTerm}/>
      </Container>
   
  )
}

export default Items