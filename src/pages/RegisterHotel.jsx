import React from 'react';
import { TextField, Button, Typography, Container, Grid, Box, FormControlLabel, Checkbox } from '@mui/material';

const RegisterHotel = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
    };

    return (
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
    );
};

export default RegisterHotel;
