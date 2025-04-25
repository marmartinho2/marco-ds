
import React from 'react';
import Button from './Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => <Button {...args}>{args.children || 'Button'}</Button>;

// Primary Variants
export const PrimaryContained = Template.bind({});
PrimaryContained.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Primary Button',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: 'text',
  color: 'primary',
  children: 'Primary Button',
};

// Secondary Variants
export const SecondaryContained = Template.bind({});
SecondaryContained.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Secondary Button',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Button',
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Secondary Button',
};

// Tertiary Variants
export const TertiaryContained = Template.bind({});
TertiaryContained.args = {
  variant: 'contained',
  color: 'tertiary',
  children: 'Tertiary Button',
};

export const TertiaryOutlined = Template.bind({});
TertiaryOutlined.args = {
  variant: 'outlined',
  color: 'tertiary',
  children: 'Tertiary Button',
};

export const TertiaryText = Template.bind({});
TertiaryText.args = {
  variant: 'text',
  color: 'tertiary',
  children: 'Tertiary Button',
};

// With Icons
export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Start Icon',
  startIcon: <AddIcon />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: 'contained',
  color: 'primary',
  children: 'End Icon',
  endIcon: <ArrowForwardIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};
