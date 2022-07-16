import { Paper, Typography, styled } from '@mui/material';
import React from 'react';

// image
import Image from '../../images/backImg2.jpg'

const MyPaper = styled(Paper) (({ theme }) => ({
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  width: "100%",
  height: 200,
  padding: 10,
  textAlign: "center",
  justifyContent: "center",
}))

const MyTypography = styled(Typography) (({ theme }) => ({
  margin: 10,
  "& .MuiTypography-root": {
    marginTop: 5
  }
}))

function Header() {

  console.log("header")
  
  return (
    <MyPaper>
     <MyTypography variant="h2" color="#393F2C">
       عکس‌های فوری
     </MyTypography>
    </MyPaper>
  )
}

export default React.memo(Header)