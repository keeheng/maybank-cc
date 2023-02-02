import { AppBar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
      <AppBar component="nav" position="static"  sx={{background: '#ffc83d', padding: '15px'}}>
            <Typography sx={{cursor: 'pointer'}}  onClick={() => navigate('/')} variant="h6" color="black">
                Maybank2u
            </Typography>
        </AppBar>
    )
}

export default NavBar;