
import React from 'react';
import Button from './Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['fill', 'outlined', 'text'],
      defaultValue: 'fill',
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
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => <Button {...args} />;

// Variantes Fill
export const PrimaryFill = Template.bind({});
PrimaryFill.args = {
  variant: 'fill',
  color: 'primary',
  children: 'Primary Fill',
};

export const SecondaryFill = Template.bind({});
SecondaryFill.args = {
  variant: 'fill',
  color: 'secondary',
  children: 'Secondary Fill',
};

export const TertiaryFill = Template.bind({});
TertiaryFill.args = {
  variant: 'fill',
  color: 'tertiary',
  children: 'Tertiary Fill',
};

// Variantes Outlined
export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Primary Outlined',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Outlined',
};

export const TertiaryOutlined = Template.bind({});
TertiaryOutlined.args = {
  variant: 'outlined',
  color: 'tertiary',
  children: 'Tertiary Outlined',
};

// Variantes Text
export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: 'text',
  color: 'primary',
  children: 'Primary Text',
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Secondary Text',
};

export const TertiaryText = Template.bind({});
TertiaryText.args = {
  variant: 'text',
  color: 'tertiary',
  children: 'Tertiary Text',
};

// Estados especiales
export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'fill',
  color: 'primary',
  children: 'With Start Icon',
  startIcon: true,
  startIconComponent: AddIcon,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: 'fill',
  color: 'primary',
  children: 'With End Icon',
  endIcon: true,
  endIconComponent: ArrowForwardIcon,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'fill',
  color: 'primary',
  children: 'Loading',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'fill',
  color: 'primary',
  children: 'Disabled Button',
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: 'fill',
  color: 'primary',
  children: 'Full Width Button',
  fullWidth: true,
};
