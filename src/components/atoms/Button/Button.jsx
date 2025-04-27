
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const StyledButton = styled(MuiButton)(({ theme, fullWidth, size, variant, color }) => ({
  textTransform: 'none',
  borderRadius: '8px',
  fontWeight: 500,
  width: fullWidth ? '100%' : 'auto',
  transition: 'all 0.2s ease-in-out',
  
  // Tamaños
  ...(size === 'small' && {
    height: '38px',
    padding: '8px 16px',
    fontSize: '14px',
  }),
  ...(size === 'medium' && {
    height: '44px',
    padding: '12px 20px',
    fontSize: '16px',
  }),
  ...(size === 'large' && {
    height: '56px',
    padding: '16px 24px',
    fontSize: '18px',
  }),

  // Variantes
  ...(variant === 'fill' && {
    backgroundColor: theme.palette[color].main,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: theme.palette[color].light,
    },
    '&:active': {
      backgroundColor: theme.palette[color].dark,
    },
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    color: theme.palette[color].main,
    border: `2px solid ${theme.palette[color].main}`,
    '&:hover': {
      backgroundColor: theme.palette[color].container,
      borderColor: theme.palette[color].light,
    },
    '&:active': {
      backgroundColor: theme.palette[color].container,
      borderColor: theme.palette[color].dark,
    },
  }),

  ...(variant === 'text' && {
    backgroundColor: 'transparent',
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette[color].container,
    },
    '&:active': {
      backgroundColor: theme.palette[color].container,
    },
  }),

  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  // Animaciones de iconos
  '& .MuiButton-startIcon': {
    marginRight: '8px',
    transition: 'transform 0.2s',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
    transition: 'transform 0.2s',
  },
  '&:hover .MuiButton-startIcon': {
    transform: 'translateX(-2px)',
  },
  '&:hover .MuiButton-endIcon': {
    transform: 'translateX(2px)',
  },
}));

const Button = ({
  children,
  variant = 'fill',
  color = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  startIcon = false,
  endIcon = false,
  loading = false,
  onClick,
  ariaLabel,
  ...props
}) => {
  const StartIcon = startIcon ? props.startIconComponent : null;
  const EndIcon = endIcon ? props.endIconComponent : null;

  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      role="button"
      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : (StartIcon && <StartIcon />)}
      endIcon={EndIcon && <EndIcon />}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['fill', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  startIconComponent: PropTypes.elementType,
  endIconComponent: PropTypes.elementType,
};

export default Button;
