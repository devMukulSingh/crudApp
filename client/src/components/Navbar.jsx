import React from 'react';
import {AppBar,Typography,Toolbar} from '@mui/material';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)({
    background:'black',
    height:'5rem',
    display:'flex',
    justifyContent:'center',
    width:'100%',
    whiteSpace:'nowrap',
})
const Tabs = styled(NavLink)({
    marginLeft:'2rem',
    fontSize:'1.2rem',
    letterSpacing:'0.5px',
    color:'white',
    textDecoration:'none',
})
const Navbar = () => {
  return (
    <>  
        <Header position='static'>
            <Toolbar>
                <Tabs to ="/">Home</Tabs>
                <Tabs to ="/getusers">All Users</Tabs>
                <Tabs to ="/addusers"> Add User</Tabs>
            </Toolbar>
        </Header>
    </>
  )
}

export default Navbar