import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme, fullWidth }) => ({
  textTransform: 'none',
  borderRadius: '8px',
  fontWeight: 500,
  width: fullWidth ? '100%' : 'auto',
  '&.MuiButton-sizeLarge': {
    padding: '12px 24px',
    fontSize: '1rem',
  },
  '&.MuiButton-sizeMedium': {
    padding: '8px 16px',
    fontSize: '0.875rem',
  },
  '&.MuiButton-sizeSmall': {
    padding: '6px 12px',
    fontSize: '0.75rem',
  },
  '&.MuiButton-contained': {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    },
  },
  '&.MuiButton-outlined': {
    borderWidth: '1.5px',
    '&:hover': {
      borderWidth: '1.5px',
    },
  },
}));

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;