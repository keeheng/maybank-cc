import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
      <AppBar component="nav" position="static"  sx={{background: '#ffc83d'}}>

            <Toolbar display="flex" justifyContent="space-between">
                <Stack width="100%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Typography sx={{cursor: 'pointer'}}  onClick={() => navigate('/')} variant="h6" color="black">
                Maybank2u
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/create')}>Create Product</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;