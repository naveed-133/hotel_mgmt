import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordField = ({ value, onChange, empty = "", helperText = "", sxProps, name = "", onFocus, onBlur }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleFocus = (e) => {
        setFocused(true);
        if (onFocus) {
            onFocus(e);
        }
    };

    const handleBlur = (e) => {
        setFocused(false);
        if (onBlur) {
            onBlur(e);
        }
    };

    return (
        <TextField
            name={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            error={empty}
            helperText={helperText}
            InputProps={{
                endAdornment: (
                    value && (
                        <InputAdornment position="end" onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                            {showPassword ? (
                                <VisibilityOffIcon />
                            ) : (
                                <VisibilityIcon />
                            )}
                        </InputAdornment>
                    )
                ),
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            sx={{
                ...sxProps,
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: focused ? '#9D40B1' : 'inherit' },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: focused ? '#9D40B1' : 'inherit' },
            }}
        />
    );
};

export default PasswordField;
