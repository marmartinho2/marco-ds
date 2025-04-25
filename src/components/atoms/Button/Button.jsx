
import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
}));

const Button = ({ children, variant = 'contained', color = 'primary', ...props }) => {
  return (
    <StyledButton variant={variant} color={color} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
