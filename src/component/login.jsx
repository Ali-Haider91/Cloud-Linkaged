import React from "react";
import { Box, TextField, Typography, Button, ButtonGroup, } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';



const login = () => {
  return (
    <div>
      
      <form>
        <Box
          display="flex"
          margin="auto"
          sx={{
            height: 710,
            backgroundColor: '#bcbcbc',
            position:'cover'
          }}>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            // padding={4}
            borderRadius={4}
            backgroundColor="#ffff"
            sx={{
              width: 800,
              height: 550,
              position: 'cover',
            }}>
              
              {/* <img 
              src="https://res.cloudinary.com/db2avaxdx/image/upload/v1667304122/remove_background_acmnri.png" alt="logo"
              /> */}
              
            <Typography
              variant="h5"
              padding={3}
              fontFamily="arial Black"
              color={'#1F4068'}>
              Login
            </Typography>
            <ButtonGroup
              variant="contained"
            >
              <Button sx={{
                backgroundColor: '#1F4068',
                textTransform: 'none',
                fontSize: '16px'
              }}>
                Login as Student</Button>
              <Button
                sx={{
                  backgroundColor: '#1F4068',
                  textTransform: 'none',
                  fontSize: '16px'
                }}>Login as Teacher</Button>
              <Button
                sx={{
                  backgroundColor: '#1F4068',
                  textTransform: 'none',
                  fontSize: '16px',
                }}>Login as Recruiter</Button>
            </ButtonGroup>
            <Typography
              variant="h5"
              padding={3}
              fontFamily="arial Black"
              color={'#1F4068'}>
              Welcome Back!
            </Typography>
            <TextField
              variant="filled"
              helperText="Eg:Se19-012@ssuet.edu.pk"
              size="small"
              type="email"
              placeholder="Enter your email"
              sx={{ width: 350, }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              type="password"
              placeholder="Enter your password"
              margin="normal"
              sx={{ width: 350 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: 5,
                borderRadius: 5,
                width: 100,
                textTransform: 'none',
                backgroundColor: '#1F4068'
              }}>
              Login
            </Button>
          </Box>
        </Box>
      </form>

    </div>
  );
};

export default login;
