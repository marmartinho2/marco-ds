
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Componente Button personalizado que extiende MUI Button
 * con estilos y funcionalidades adicionales
 */
const StyledButton = styled(MuiButton)(({ theme, fullWidth, size }) => ({
  // Estilos base
  textTransform: 'none',
  borderRadius: '8px',
  fontWeight: 500,
  width: fullWidth ? '100%' : 'auto',
  transition: 'all 0.2s ease-in-out',

  // Tamaños
  ...(size === 'large' && {
    padding: '12px 24px',
    fontSize: '1rem',
  }),
  ...(size === 'medium' && {
    padding: '8px 16px',
    fontSize: '0.875rem',
  }),
  ...(size === 'small' && {
    padding: '6px 12px',
    fontSize: '0.75rem',
  }),

  // Variantes
  '&.MuiButton-contained': {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: theme.shadows[2],
    },
    '&:active': {
      boxShadow: theme.shadows[4],
    },
  },

  '&.MuiButton-outlined': {
    borderWidth: '1.5px',
    '&:hover': {
      borderWidth: '1.5px',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },

  '&.MuiButton-text': {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },

  // Estados
  '&.Mui-disabled': {
    opacity: 0.6,
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
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  ariaLabel,
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
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      role="button"
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Contenido del botón */
  children: PropTypes.node.isRequired,
  /** Variante del botón: 'contained', 'outlined', o 'text' */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** Color del botón: 'primary', 'secondary', o 'tertiary' */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Tamaño del botón: 'small', 'medium', o 'large' */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Estado deshabilitado */
  disabled: PropTypes.bool,
  /** Ancho completo */
  fullWidth: PropTypes.bool,
  /** Mostrar icono al inicio del botón */
  startIcon: PropTypes.bool,
  /** Mostrar icono al final del botón */
  endIcon: PropTypes.bool,
  /** Función onClick */
  onClick: PropTypes.func,
  /** Etiqueta aria para accesibilidad */
  ariaLabel: PropTypes.string,
};

export default Button;
