// import NavBar from "../../components/Navbar";
// import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid"
import { FlexDiv, SellerSignUpHeader, SellerSignUpText, LoginBox, LoginBoxHeader, LoginBoxText, LoginBoxBtn, OrText, ContinueSignText, ContentButton, SignUpPageBlur, CheckBoxLabel } from "../assets/styles/styles";
import SignUpImageOne from "../assets/images/image 9.png";
// import Footer from "../../components/Footer";
import TextField from '@mui/material/TextField';
import { OR, CONTINUE_SIGNING, LIFE_IS_BETTER, LOREM_IPSUM_SIGNUP, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD } from "../assets/constants/text";
import { useMediaQuery } from "react-responsive";
// import FooterDivider from "../../components/FooterDivider";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
// import { Snackbar } from "@mui/material";
// import MuiAlert from '@mui/material/Alert';
// import { buyerSignup, sendVerificationEmail } from "../../Services/Authentication";
// import VerificationModal from "../../components/VerificationModal";
// import { SIGNUP_HEADER_DATA } from "../../constants/data";
import PasswordField from "../components/PasswordField";
// import ReactGA4 from 'react-ga4';
// import { Helmet } from 'react-helmet';
// import GoogleLoginButton from "../../components/GoogleLoginButton";
import { Container } from "@mui/material";

const SellerSignUp = () => {
    const isDesktop = useMediaQuery({ minWidth: "1200px" });
    const isMobile = useMediaQuery({ maxWidth: "600px" });
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emptyEmail, setEmptyEmail] = useState("");
    const [fname, setFname] = useState("");
    const [emptyFname, setEmptyFname] = useState("");
    const [lname, setLname] = useState("");
    const [emptylname, setEmptyLname] = useState("");
    const [password, setPassword] = useState("");
    const [emptyPassword, setEmptyPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmEmptyPassword, setConfirmEmptyPassword] = useState("");
    const [dataSubmission, setDataSubmission] = useState(false);
    const [open, setOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [isOpen, setIsOpen] = useState(false);
    const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    // Error states for input validation
    const [emailError, setEmailError] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const firstNameChange = (event) => {
        setFname(event.target.value);
    };

    const lastNameChange = (event) => {
        setLname(event.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(name);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleCreateAccount = () => {
        // Reset error messages
        setEmailError("");
        setFnameError("");
        setLnameError("");
        setPasswordError("");
        setConfirmPasswordError("");

        let isValid = true;

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            isValid = false;
        }

        if (!validateName(fname)) {
            setFnameError("Please enter a valid first name");
            isValid = false;
        }

        if (!validateName(lname)) {
            setLnameError("Please enter a valid last name");
            isValid = false;
        }

        if (!validatePassword(password)) {
            setPasswordError(
                "Password must be at least 8 characters long and contain atleast 1 letter,number and special character"
            );
            isValid = false;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        }

        if (isValid) {
            // Proceed with registration
            setDataSubmission(true);
            handleRegister();
        }
    };
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleVerifyEmail = async () => {
        try {
            // sendVerificationEmail(email);
            closeModal();
            // setTimeout(() => {
            //     navigate("/login");
            // }, 1000);
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    };


    const handleRegister = async () => {
        // try {
        //     const response = await buyerSignup(fname, lname, email, password, 'buyer');
        //     if (response) {
        //         setDataSubmission(false);
        //         setSnackbarMsg("Registration Successful");
        //         setSnackbarSeverity("success");
        //         setOpen(true);
        //         // setTimeout(() => {
        //         //     localStorage.setItem("access-token", response.response.tokens.access.token);
        //         //     localStorage.setItem("refresh-token", response.response.tokens.refresh.token);
        //         //     localStorage.setItem('access-token-expiry', response.response.tokens.access.expires);
        //         //     localStorage.setItem('refresh-token-expiry', response.response.tokens.refresh.expires);
        //         //     localStorage.setItem("Cornucopia-user", JSON.stringify(response.response.user));
        //         //     // navigate('/');
        //         // }, 1000);
        //         ReactGA4.event({
        //             category: 'Conversion',
        //             action: 'Signup',
        //             label: 'User Signed Up',
        //         });
        //         openModal();
        //     }
        // } catch (error) {
        //     console.error('Login error:', error);
        //     setDataSubmission(false);
        //     if (error?.response?.data?.message) {
        //         setSnackbarMsg(error.response.data.message);
        //         setSnackbarSeverity("error")
        //     } else if (error?.message) {
        //         setSnackbarMsg(error.message);
        //         setSnackbarSeverity("error")
        //     } else {
        //         setSnackbarMsg('Error');
        //         setSnackbarSeverity("error")
        //     }
        //     setOpen(true);
        // }
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setSnackbarMsg('');
    };

    return (
        <>
            <Container maxWidth={false} sx={{ maxWidth: '1800px' }} disableGutters>

                {isDesktop && <SignUpPageBlur />}
                {/* <NavBar header_data={SIGNUP_HEADER_DATA} header_button={{ label: "Login", navigation_url: "/login" }} mobile_nav_height={"210px"} /> */}
                <Grid container spacing={0} style={{ marginTop: "3rem", marginBottom: "-370px" }}>
                    {isDesktop && (
                        <Grid item lg={6} sm={0} display="flex" flexDirection="column" alignItems="flex-start">
                            <SellerSignUpHeader style={{ width: "17rem", marginTop: "4rem", marginLeft: "150px" }}>
                                {LIFE_IS_BETTER}
                                <span style={{ color: "#700189" }}>AI</span>
                            </SellerSignUpHeader>
                            <SellerSignUpText style={{ marginLeft: "150px" }}>{LOREM_IPSUM_SIGNUP}</SellerSignUpText>
                            <FlexDiv style={{ marginTop: "5rem", marginLeft: "150px" }}>
                                <img alt="" src={SignUpImageOne} />
                            </FlexDiv>
                        </Grid>
                    )}
                    <Grid item lg={6} xs={12} display="flex" alignItems="center" justifyContent="center">
                        <LoginBox
                            style={{
                                height: "100%",
                                width: isMobile ? "100%" : "",
                                marginRight: isMobile ? "1rem" : "",
                                marginLeft: isMobile ? "1rem" : "",
                                paddingBottom: "100px",
                            }}
                        >
                            <LoginBoxHeader style={{ marginTop: "2.65rem", textAlign: "center", fontStyle: "normal" }}>
                                Join <span style={{ fontFamily: "calibri", fontWeight: "bold", fontSize: "30px" }}>O</span>ur Venture
                            </LoginBoxHeader>
                            <FlexDiv
                                style={{
                                    marginTop: "2.75rem",
                                    justifyContent: "space-around",
                                    flexDirection: isMobile ? "column" : "row",
                                    marginLeft: isMobile ? "1.3rem" : "",
                                    marginRight: isMobile ? "1.3rem" : "",
                                }}
                            >
                                <div>
                                    <LoginBoxText>{FIRST_NAME}</LoginBoxText>
                                    <TextField
                                        type="text"
                                        sx={{
                                            width: isMobile ? "100%" : "15.5rem",
                                            height: "51px",
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: fnameError ? "red" : "#9D40B1",
                                            },
                                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: fnameError ? "red" : "#9D40B1",
                                            },
                                        }}
                                        value={fname}
                                        onChange={firstNameChange}
                                        error={!!fnameError}
                                        helperText={fnameError || (emptyFname ? "Field is required" : "")}
                                    />
                                </div>
                                <div style={{ marginTop: isMobile ? "2rem" : "" }}>
                                    <LoginBoxText>{LAST_NAME}</LoginBoxText>
                                    <TextField
                                        type="text"
                                        sx={{
                                            width: isMobile ? "100%" : "15.5rem",
                                            height: "51px",
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: lnameError ? "red" : "#9D40B1",
                                            },
                                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: lnameError ? "red" : "#9D40B1",
                                            },
                                        }}
                                        value={lname}
                                        onChange={lastNameChange}
                                        error={!!lnameError}
                                        helperText={lnameError || (emptylname ? "Field is required" : "")}
                                    />
                                </div>
                            </FlexDiv>
                            <FlexDiv
                                style={{
                                    marginTop: "2rem",
                                    justifyContent: "flex-start",
                                    flexDirection: isMobile ? "column" : "row",
                                    marginLeft: isMobile ? "1.3rem" : "",
                                    marginRight: isMobile ? "1.3rem" : "",
                                }}
                            >
                                <div style={{ paddingLeft: isMobile ? "0px" : "20px" }}>
                                    <LoginBoxText>{EMAIL}</LoginBoxText>
                                    <TextField
                                        type="email"
                                        sx={{
                                            width: isMobile ? "100%" : "15.5rem",
                                            height: "51px",
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: emailError ? "red" : "#9D40B1",
                                            },
                                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: emailError ? "red" : "#9D40B1",
                                            },
                                        }}
                                        value={email}
                                        onChange={handleEmailChange}
                                        error={!!emailError}
                                        helperText={emailError || (emptyEmail ? "Field is required" : "")}
                                    />
                                </div>
                            </FlexDiv>
                            <FlexDiv
                                style={{
                                    marginTop: "2rem",
                                    justifyContent: "space-around",
                                    flexDirection: isMobile ? "column" : "row",
                                    marginLeft: isMobile ? "1.3rem" : "",
                                    marginRight: isMobile ? "1.3rem" : "",
                                }}
                            >
                                <div>
                                    <LoginBoxText>{PASSWORD}</LoginBoxText>
                                    <PasswordField
                                        sxProps={{
                                            width: isMobile ? "100%" : "15.5rem",
                                            height: "51px",
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: passwordError ? "red" : "#9D40B1",
                                            },
                                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: passwordError ? "red" : "#9D40B1",
                                            },
                                        }}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        empty={!!passwordError}
                                        helperText={passwordError || (emptyPassword ? "Field is required" : "")}
                                    />
                                </div>
                                <div style={{ marginTop: isMobile ? ((passwordError === '' && isMobile) ? "2rem" : "4rem") : "" }}>
                                    <LoginBoxText>{CONFIRM_PASSWORD}</LoginBoxText>
                                    <PasswordField
                                        sxProps={{
                                            width: isMobile ? "100%" : "15.5rem",
                                            height: "51px",
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: confirmPasswordError ? "red" : "#9D40B1",
                                            },
                                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: confirmPasswordError ? "red" : "#9D40B1",
                                            },
                                        }}
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        empty={!!confirmPasswordError}
                                        helperText={confirmPasswordError || (confirmEmptyPassword ? "Field is required" : "")}
                                    />
                                </div>
                            </FlexDiv>
                            {/* <FlexDiv
                            style={{
                                marginTop: "2rem",
                                justifyContent: "flex-start",
                                flexDirection: isMobile ? "column" : "row",
                                marginLeft: isMobile ? "1.3rem" : "",
                                marginRight: isMobile ? "1.3rem" : "",
                            }}
                        >
                            <div style={{ marginTop: passwordError === "" ? '' : '1.5rem' }}>
                                <label style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    paddingLeft: "25px",
                                    marginTop: '1rem'  // Use a ternary operator here
                                }}>
                                    <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                                    <CheckBoxLabel>
                                        Send me tips, trends, freebies, updates & offers.{!isMobile && <br />}
                                        You can unsubscribe anytime.
                                    </CheckBoxLabel>
                                </label>
                            </div>

                        </FlexDiv> */}
                            <FlexDiv style={{ justifyContent: "center" }}>
                                <LoginBoxBtn style={{ width: isMobile ? "95%" : "" }} onClick={handleCreateAccount}>
                                    {!dataSubmission ? "Create an account" : <CircularProgress color="secondary" style={{ width: '27px', height: '25px' }} />}
                                </LoginBoxBtn>
                            </FlexDiv>
                            <FlexDiv style={{ margin: "2.5rem 2rem 1.5rem 2rem" }}>
                                <div style={{ height: "0.0625rem", background: "#BDBDBD", width: "100%", marginTop: "0.5rem" }} />
                                <OrText style={{ margin: "0rem 0.2rem" }}>{OR}</OrText>
                                <div style={{ height: "0.0625rem", background: "#BDBDBD", width: "100%", marginTop: "0.5rem" }} />
                            </FlexDiv>
                            {/* <ContinueSignText>{CONTINUE_SIGNING}</ContinueSignText>
                            <FlexDiv style={{ margin: "2rem 0rem 3rem 0rem", justifyContent: "center" }}>
                                <GoogleLoginButton />
                            </FlexDiv> */}
                        </LoginBox>
                    </Grid>
                </Grid>
            </Container>
            
        </>
    );
};
export default SellerSignUp;

