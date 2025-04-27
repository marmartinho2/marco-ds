
import React from 'react';
import Button from './Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Componente Button

Un botón versátil y accesible que soporta múltiples variantes, colores y tamaños.
Diseñado para ser consistente con el sistema de diseño y fácilmente personalizable.

#### Uso

\`\`\`jsx
import { Button } from './components/atoms';

function MyComponent() {
  return (
    <Button 
      variant="contained"
      color="primary"
      onClick={() => console.log('Clicked!')}
    >
      Click me
    </Button>
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
      description: 'Estilo visual del botón',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
      description: 'Color del botón según la paleta de colores',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'Tamaño del botón',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Estado deshabilitado del botón',
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
      description: 'Si el botón debe ocupar todo el ancho disponible',
    },
  },
};

const Template = (args) => <Button {...args} />;

// Primary Variants
export const PrimaryFilled = Template.bind({});
PrimaryFilled.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Filled',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Primary Outlined',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: 'text',
  color: 'primary',
  children: 'Primary Text',
};

// Secondary Variants
export const SecondaryFilled = Template.bind({});
SecondaryFilled.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Secondary Filled',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Outlined',
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Secondary Text',
};

// Tertiary Variants
export const TertiaryFilled = Template.bind({});
TertiaryFilled.args = {
  variant: 'contained',
  color: 'tertiary',
  children: 'Tertiary Filled',
};

export const TertiaryOutlined = Template.bind({});
TertiaryOutlined.args = {
  variant: 'outlined',
  color: 'tertiary',
  children: 'Tertiary Outlined',
};

export const TertiaryText = Template.bind({});
TertiaryText.args = {
  variant: 'text',
  color: 'tertiary',
  children: 'Tertiary Text',
};

// Variants with Icons
export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Add Item',
  startIcon: true,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Next Step',
  endIcon: true,
};

// Special States
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  variant: 'contained',
  color: 'primary',
  children: 'Full Width Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  variant: 'contained',
  color: 'primary',
  children: 'Disabled Button',
};
