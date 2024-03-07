import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle click on Register button
    const handleRegisterClick = () => {
        navigate('/signup'); // Navigate to /signup route
    };

    // Function to handle click on Login button
    const handleLoginClick = () => {
        navigate('/'); // Navigate to / route
    };

    const handleRegisterManagerClick = () => {
        navigate('/signup-manager'); // Navigate to / route
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    HotelHub
                </Typography>
                {isMobile ? (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <>
                        <Button color="inherit" onClick={handleLoginClick}>Login</Button>
                        <Button color="inherit" onClick={handleRegisterClick}>Register</Button>
                            <Button color="inherit" onClick={handleRegisterManagerClick}>Register as Manager</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
