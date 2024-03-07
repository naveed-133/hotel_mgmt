import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from '../components/Navbar';

const SignupManager = () => {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dataSubmission, setDataSubmission] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (!fname.trim()) {
            errors.fname = 'First name is required';
        }

        if (!lname.trim()) {
            errors.lname = 'Last name is required';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (!phoneNumber.trim()) {
            errors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{11}$/.test(phoneNumber)) {
            errors.phoneNumber = 'Phone number must be 10 digits';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleCreateAccount = async () => {
        if (!validateForm()) {
            return;
        }

        setDataSubmission(true);
        const number = phoneNumber;
        const userData = {
            name: fname,
            email,
            password,
            number,
            role: 'user'
        };

        try {
            const response = await axios.post('https://hotels-management-backend.onrender.com/api/accounts', userData);

            // Check if the request was successful
            console.log('Account created successfully');
        } catch (error) {
            console.error('Error creating account:', error);
        } finally {
            setDataSubmission(false);
        }
    };

    return (
        <>
            <Navbar />
            <div style={{ background: 'linear-gradient(120deg, #2980b9, #8e44ad)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2rem' }}>
                <Container maxWidth="sm">
                    <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Join Our Venture</h2>
                        <TextField
                            label="First Name"
                            fullWidth
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            error={!!errors.fname}
                            helperText={errors.fname}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            label="Last Name"
                            fullWidth
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            error={!!errors.lname}
                            helperText={errors.lname}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            label="Confirm Password"
                            fullWidth
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            label="Phone Number"
                            fullWidth
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                            sx={{ marginBottom: '20px' }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleCreateAccount}
                                disabled={dataSubmission}
                                sx={{ marginBottom: '20px', padding: '12px', width: '80%' }} // Adjusted button padding
                            >
                                {dataSubmission ? <CircularProgress size={24} /> : 'Create Account'}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default SignupManager;
