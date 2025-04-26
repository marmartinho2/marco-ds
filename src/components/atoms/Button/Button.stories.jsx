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
      options: ['fill', 'outlined', 'text'],
      defaultValue: 'fill',
      description: 'Estilo visual del botón',
    },
    color: {
      control: 'select',
      options: ['secondary', 'tertiary'],
      defaultValue: 'secondary',
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

// Variantes Primary
export const Fill = Template.bind({});
Fill.args = {
  variant: 'fill',
  color: 'secondary',
  children: 'Fill Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Outlined Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Text Button',
};

// Variantes con Iconos
export const FillWithStartIcon = Template.bind({});
FillWithStartIcon.args = {
  variant: 'fill',
  color: 'secondary',
  children: 'Add Item',
  fillStartIcon: true,
};

export const OutlinedWithEndIcon = Template.bind({});
OutlinedWithEndIcon.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Next Step',
  outlinedEndIcon: true,
};

export const TextWithBothIcons = Template.bind({});
TextWithBothIcons.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Navigate',
  textStartIcon: true,
  textEndIcon: true,
};

// Estados Especiales
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  variant: 'fill',
  color: 'secondary',
  children: 'Full Width Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  variant: 'fill',
  color: 'secondary',
  children: 'Disabled Button',
};