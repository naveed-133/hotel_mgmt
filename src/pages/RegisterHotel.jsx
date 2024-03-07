import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HotelIcon from '@mui/icons-material/Hotel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Grid, Box, FormControlLabel, Checkbox } from '@mui/material';

const NavbarContainer = styled('div')(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the right end
}));

const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
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

    const handleDashboardClick = () => {
        navigate('/dashboard');
    };
    return (
        <NavbarContainer>
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
                                <IconButton color="inherit" onClick={handleDashboardClick}>
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
            </AppBar>
        </NavbarContainer>
    );
};

const RegisterHotel = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
    };

    return (
        <>
            <Navbar />
            <div style={{ background: 'linear-gradient(120deg, #2980b9, #8e44ad)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container maxWidth="md">
                    <Box boxShadow={3} borderRadius={4} p={3} bgcolor="background.paper">
                        <Typography variant="h4" gutterBottom>
                            Register Your Hotel
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Hotel Name"
                                        name="hotelName"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Location"
                                        name="location"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Description"
                                        name="description"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Contact Email"
                                        name="contactEmail"
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        label="Contact Phone Number"
                                        name="contactPhoneNumber"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" />}
                                        label="I agree to the terms and conditions"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default RegisterHotel;
