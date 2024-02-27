// import NavBar from "../components/Navbar";
import Grid from "@mui/material/Grid"
import { LoginHeading, LoginText, LoginBox, LoginBoxHeader, LoginBoxText, FlexDiv, LoginBottomText, LoginBoxBtn, OrText, ContinueSignText, ContentButton, LoginPageBlur } from "../assets/styles/styles";
import LOGIN_IMG from "../assets/images/login_image.svg";
import { useMediaQuery } from "react-responsive";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { GREAT_TO_HAVE, SIGN_IN_WITH, JOURNEY, EMAIL, PASSWORD, REMEMBER_ME, FORGOT_PASSWORD, LOGIN, CONTINUE_SIGNING, OR } from "../assets/constants/text";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import PasswordField from "../components/PasswordField";
import { Container } from '@mui/material';
import { useNavigate } from "react-router-dom";

 const HEADER_DATA = [
    {
        id: '1',
        name: 'Home',
        margin_right: '2rem',
        navigation_url: '/'
    },
    {
        id: '2',
        name: 'Products',
        margin_right: '2rem',
        navigation_url: '/products'
    },
    {
        id: '3',
        name: 'Sellers',
        margin_right: '0rem',
        navigation_url: '/sellers'
    }
];

const Login = () => {
    const isDesktop = useMediaQuery({ minWidth: '1200px' });
    const isMobile = useMediaQuery({ maxWidth: '650px' });
    const [email, setEmail] = useState('');
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [dataSubmission, setDataSubmission] = useState(false);
    const [open, setOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const navigate = useNavigate();
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmptyEmail(event.target.value === "");
    };

    const handleForgotPasswordClick = () => {
        // navigate('/reset-password');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setEmptyPassword(event.target.value === "");
    };

    // const handleLogin = async () => {
    //     try {
    //         const response = await login(email, password);
    //         if (response) {
    //             setDataSubmission(false);
    //             setSnackbarMsg("Login Successful");
    //             setSnackbarSeverity("success");
    //             setOpen(true);
    //             setTimeout(() => {
    //                 localStorage.setItem('access-token', response.response.tokens.access.token);
    //                 localStorage.setItem('refresh-token', response.response.tokens.refresh.token);
    //                 localStorage.setItem('access-token-expiry', response.response.tokens.access.expires);
    //                 localStorage.setItem('refresh-token-expiry', response.response.tokens.refresh.expires);
    //                 localStorage.setItem('Cornucopia-user', JSON.stringify(response.response.user));

    //                 const redirectPath = localStorage.getItem('redirectPath');
    //                 if (redirectPath) {
    //                     localStorage.removeItem('redirectPath'); // Remove the stored redirect path
    //                     navigate(redirectPath); // Redirect to the stored path
    //                 } else {
    //                     if (response.response.user.response.role === 'buyer') {
    //                         navigate('/');
    //                     } else if (response.response.user.response.role === 'seller') {
    //                         if (response.response.user.response.stripe_connect_account) {
    //                             navigate('/seller');
    //                         } else {
    //                             navigate('/onboard');
    //                         }
    //                     }
    //                 }
    //             }, 500);
    //         }
    //     } catch (error) {
    //         setDataSubmission(false);
    //         console.error('Login error:', error);
    //         if (error?.response?.data?.message) {
    //             setSnackbarMsg(error.response.data.message);
    //             setSnackbarSeverity('error');
    //         }
    //         else if (error?.response?.message) {
    //             setSnackbarMsg(error.response.message);
    //             setSnackbarSeverity('error');
    //         } else if (error?.message) {
    //             setSnackbarMsg(error.message);
    //             setSnackbarSeverity('error');
    //         } else {
    //             setSnackbarMsg('Error');
    //             setSnackbarSeverity('error');
    //         }
    //         setOpen(true);
    //     }
    // };

    const handleFormSubmit = () => {
        if (email === '') {
            setEmptyEmail(true);
            return;
        }
        if (password === '') {
            setEmptyPassword(true);
            return;
        }
        setDataSubmission(true);
        // handleLogin();
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setSnackbarMsg('');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <>
            <Container maxWidth={false} sx={{ maxWidth: '1800px' }} disableGutters>
                
                {/* {isDesktop && <LoginPageBlur />}
                <NavBar
                    header_data={HEADER_DATA}
                    header_button={{ label: 'Join the venture', navigation_url: '/buyerseller' }}
                    mobile_nav_height={'210px'}
                /> */}
                <Grid container spacing={0} style={{ marginTop: '3rem', marginBottom: '-200px' }}>
                    {isDesktop && (
                        <Grid item lg={6} sm={0} display="flex" flexDirection="column" alignItems="center">
                            <LoginHeading style={{ marginTop: '5rem', marginLeft: '1rem' }}>{GREAT_TO_HAVE}</LoginHeading>
                            <LoginText style={{ marginLeft: '1.2rem' }}>{SIGN_IN_WITH}</LoginText>
                            <img alt="" src={LOGIN_IMG} style={{ marginTop: '5.3rem' }} />
                        </Grid>
                    )}
                    <Grid item lg={6} xs={12} display="flex" alignItems="center" justifyContent="center" >
                        <LoginBox style={{ width: isMobile ? '100%' : '', marginRight: isMobile ? '1rem' : '', marginLeft: isMobile ? '1rem' : '' }}>
                            <LoginBoxHeader style={{ marginTop: '2.65rem', textAlign: 'center', fontWeight: 'bold' }}>{JOURNEY}</LoginBoxHeader>
                            <div style={{ marginLeft: isMobile ? '1.3rem' : '', marginRight: isMobile ? '1.3rem' : '' }}>
                                <LoginBoxText style={{ marginTop: '5.75rem', marginLeft: isMobile ? '' : '8.9rem' }}>{EMAIL}</LoginBoxText>
                                <TextField
                                    type="email"
                                    sx={{
                                        marginLeft: isMobile ? '' : '8.9rem',
                                        marginRight: isMobile ? '' : '8rem',
                                        width: isMobile ? '100%' : '19rem',
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9D40B1' },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9D40B1' },
                                    }}
                                    value={email}
                                    onChange={handleEmailChange}
                                    error={emptyEmail}
                                    helperText={emptyEmail ? 'Email  field is required' : ''}
                                />
                                <LoginBoxText style={{ marginTop: '2.3rem', marginLeft: isMobile ? '' : '8.9rem' }}>{PASSWORD}</LoginBoxText>
                                <PasswordField
                                    value={password}
                                    onChange={handlePasswordChange}
                                    empty={emptyPassword}
                                    helperText={emptyPassword ? 'Password field is required' : ''}
                                    sxProps={{
                                        marginLeft: isMobile ? '' : '8.9rem',
                                        marginRight: isMobile ? '' : '8rem',
                                        width: isMobile ? '100%' : '19rem',
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9D40B1' },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9D40B1' },
                                    }}
                                />
                            </div>
                            <FlexDiv style={{ marginTop: '0.5rem', justifyContent: isMobile ? 'space-between' : '' }}>
                                <FlexDiv>
                                    <Checkbox
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: '0.85rem' }, marginLeft: isMobile ? '0.5rem' : '8.4rem' }}
                                        color="secondary"
                                    />
                                    <LoginBottomText style={{ marginTop: '0.5rem' }}>{REMEMBER_ME}</LoginBottomText>
                                </FlexDiv>
                                <button style={{ display: 'contents' }} onClick={handleForgotPasswordClick}>
                                    <LoginBottomText style={{ marginLeft: isMobile ? '' : '3.1rem', marginTop: '0.5rem', marginRight: isMobile ? '1rem' : '' }}>{FORGOT_PASSWORD}</LoginBottomText>
                                </button>
                            </FlexDiv>
                            <FlexDiv style={{ justifyContent: 'center' }}>
                                <LoginBoxBtn style={{ width: isMobile ? '95%' : '' }} onClick={handleFormSubmit}>{!dataSubmission ? LOGIN : <CircularProgress color="secondary" style={{ width: '27px', height: '25px' }} />}</LoginBoxBtn>
                            </FlexDiv>
                            <FlexDiv style={{ margin: '2.5rem 2rem 1.5rem 2rem' }}>
                                <div style={{ height: '0.0625rem', background: '#BDBDBD', width: '100%', marginTop: '0.5rem' }} />
                                <OrText style={{ margin: '0rem 0.2rem' }}>{OR}</OrText>
                                <div style={{ height: '0.0625rem', background: '#BDBDBD', width: '100%', marginTop: '0.5rem' }} />
                            </FlexDiv>
                            <FlexDiv style={{ margin: '1rem 0rem', justifyContent: 'center' }}>
                                <LoginBoxBtn onClick={handleSignupClick}>Signup</LoginBoxBtn>
                            </FlexDiv>
                            {/* <ContinueSignText>{CONTINUE_SIGNING}</ContinueSignText>
                            <FlexDiv style={{ margin: '2rem 0rem 3rem 0rem', justifyContent: 'center' }}>
                                <GoogleLoginButton />
                            </FlexDiv> */}
                        </LoginBox>
                    </Grid>
                </Grid>
            </Container>
          
        </>
    );
};

export default Login;
