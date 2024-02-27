import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, useMediaQuery } from '@mui/material';
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

const DrawerContainer = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
}));

const DrawerPaper = styled('div')(({ theme }) => ({
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

const Dashboard = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleRegisterHotelClick = () => {
        navigate('/registerhotel');
    };

    const theme = createTheme(); // Create a default theme

    return (
        <ThemeProvider theme={theme}>
            <Root>
                <MenuButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                </MenuButton>
                <DrawerContainer variant={isMobile ? 'temporary' : 'permanent'} open={openDrawer} onClose={toggleDrawer}>
                    <DrawerPaper>
                        <List>
                            <ListItem button onClick={handleRegisterHotelClick}>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Register Hotel" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <HotelIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>
                        </List>
                    </DrawerPaper>
                </DrawerContainer>
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
