
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Button from './components/atoms/Button/Button';
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h1>Design System Demo</h1>
        <Button>Click me!</Button>
      </main>
    </ThemeProvider>
  );
}
