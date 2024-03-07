import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HotelIcon from '@mui/icons-material/Hotel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
}));

const Content = styled('div')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth,
    },
}));

const Dashboard = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (path) => {
        navigate(path);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRegisterHotelClick = () => {
        navigate('/registerhotel');
    };

    const theme = createTheme(); // Create a default theme

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    {isMobile && (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hotel Manager
                    </Typography>
                    {!isMobile && (
                        <div>
                            <Tooltip title="Register Hotel">
                                <IconButton color="inherit" onClick={handleRegisterHotelClick}>
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Dashboard">
                                <IconButton color="inherit">
                                    <HotelIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Logout">
                                <IconButton color="inherit">
                                    <ExitToAppIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Menu
                id="responsive-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
            >
                <MenuItem onClick={() => handleMenuItemClick('/registerhotel')}>
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    Register Hotel
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/dashboard')}>
                    <HotelIcon sx={{ mr: 1 }} />
                    Dashboard
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/logout')}>
                    <ExitToAppIcon sx={{ mr: 1 }} />
                    Logout
                </MenuItem>
            </Menu>
            <Root>
                <Content>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Hotel Manager Dashboard
                    </Typography>
                    <Typography variant="body1" paragraph>
                        You can manage your hotel operations, bookings, and more from here.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Use the navigation menu to explore different options.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        If you need any assistance, feel free to reach out to our support team.
                    </Typography>
                </Content>
            </Root>
        </ThemeProvider>
    );
};

export default Dashboard;
