import React from 'react'
import { Box, TextField, Typography, Button, Divider } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const signup = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          margin="auto"
          marginTop={5}
          sx={{
            width: 900,
            height: 1100,
            backgroundColor: '#CCD6DD',
          }}>
          <Box
            display="flex"
            flexDirection={"column"}
            margin="auto"
            padding={4}
            borderRadius={4}
            backgroundColor="#ffff"
            sx={{
              height: 950,
              width: 750,
            }}>
            <Typography
              variant="h5"
              fontFamily="arial Black"
              color={'#1F4068'}>
              Recruiter Signup
            </Typography>
            <Typography
              variant="h6"
              paddingBottom={2}
              // padding={1}
              fontSize={13}>
              Enter your Relevent details to get registered!
            </Typography>
            <TextField
              variant="filled"
              size="small"
              type="name"
              placeholder="Your Name"
              margin='normal'
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              type="name"
              placeholder="Your Job role"
              margin='normal'
              sx={{
                width: 350,

              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactPageIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              type="name"
              margin='normal'
              placeholder=" Organization Name"
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessSharpIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              multiline
              type="name"
              margin='normal'
              rows={4}
              placeholder="Describe your Organization"
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              type="email"
              placeholder=" Email address"
              margin='normal'
              sx={{
                width: 350,
              }}
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
              type="number"
              placeholder=" Company Phone number"
              margin='normal'
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}

            />
            <TextField
              variant="filled"
              size="small"
              type="name"
              placeholder=" Company website link"
              margin='normal'
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LanguageIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              type="name"
              placeholder=" Linkedin profile link"
              margin='normal'
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              type="name"
              placeholder=" Complete Company address"
              margin='normal'
              sx={{
                width: 350,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                hidden
              />
            </Button>


            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                // margin:,
                borderRadius: 5,
                width: 100,
                textTransform: 'none',
                backgroundColor: '#1F4068'
              }}>
              Login
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default signup