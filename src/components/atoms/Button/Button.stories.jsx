
import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['contained', 'outlined', 'text'] },
    },
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'error', 'warning'] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'contained',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'outlined',
  color: 'secondary',
};
