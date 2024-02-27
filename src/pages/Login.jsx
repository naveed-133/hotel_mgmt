import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataSubmission, setDataSubmission] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLogin = async () => {
        if (!validateForm()) {
            return;
        }

        setDataSubmission(true);

        try {
            const response = await axios.post('https://hotels-management-backend.onrender.com/api/accounts/login', { email, password });

            // Check if the request was successful
            console.log('Login successful');
        } catch (error) {
            console.error('Error logging in:', error);
        } finally {
            setDataSubmission(false);
        }
    };

    return (
        <>
            <Navbar />
            <div style={{ background: 'linear-gradient(120deg, #2980b9, #8e44ad)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container maxWidth="sm">
                    <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login to Your Account</h2>
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
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleLogin}
                                disabled={dataSubmission}
                                sx={{ marginBottom: '20px', padding: '12px', width: '80%' }} // Adjusted button padding
                            >
                                {dataSubmission ? <CircularProgress size={24} /> : 'Login'}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Login;
