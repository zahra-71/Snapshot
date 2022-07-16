import React from 'react';
import { Link, Button, styled, Box } from '@mui/material';
import { useNavigate } from 'react-router';

const MyButton = styled(Button) (({ theme }) => ({
  color: "#393F2C",
  backgroundColor: "#95C3D8",
  margin: "15px",
  borderRadius: "15px",
  "&: hover": {
    backgroundColor: "#86BBD2",
    color: "#393F2C",
    outline: "2px solid #4C94CB"
  },
}))

function Navigation() {
  
  const navigate = useNavigate();
  console.log("navigation")

  return (
    <Box pt={1}>
      <MyButton component={Link}
        onClick={() => {
          navigate("/کوه")
        }}
      >
        کوه
      </MyButton>
      <MyButton component={Link}
        onClick={() => {
          navigate("/دریا")
        }}
      >
        دریا
      </MyButton>
      <MyButton component={Link}
        onClick={() => {
          navigate("/پرنده")
        }}
      >
        پرنده
      </MyButton>
      <MyButton component={Link}
        onClick={() => {
          navigate("/جنگل")
        }}
      >
        جنگل
      </MyButton>
    </Box>
  )
}

export default React.memo(Navigation)