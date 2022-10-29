import React from 'react'
import { Box, TextField, Typography, Button } from "@mui/material";
const signup = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          margin="auto"
          marginTop={5}
          sx={{
            width: 700,
            height: 900,
            backgroundColor: '#CCD6DD',
          }}>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            padding={4}
            borderRadius={4}
            backgroundColor="#ffff"
            sx={{
              height:750,
              width: 550,
            }}>
            <Typography
              variant="h6"
              padding={3}
              // marginBottom={}
              fontFamily="arial Black">
              Login
            </Typography>
            <Typography
              variant="h5"
              padding={3}
              fontFamily="arial Black">
              Welcome Back!
            </Typography>
            <TextField
              variant="filled"
              size="small"
              type="email"
              placeholder="Enter your email"
              sx={{ width: 300, }}
            />
            <TextField
              variant="filled"
              size="small"
              type="password"
              placeholder="Enter your password"
              margin="normal"
              sx={{ width: 300 }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
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
  )
}

export default signup