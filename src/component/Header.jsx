import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import invertlogo from '../assets/invertlogo.png';
import styled from 'styled-components';
import './Header.css';


const Logo = styled('img')(()=>({
  height:'3rem',
  minHeight:'2rem',
}))


const Header = () => {
  return (
    <AppBar position="static" color="primary" >
      <Toolbar className='toolbar'>
        <Logo src={invertlogo}/>
        {/* <img src={invertlogo} alt='logo'/> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header