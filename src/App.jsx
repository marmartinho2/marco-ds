
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1>Mi Design System</h1>
          <p>
            Esta es una aplicación de muestra que utiliza mi tema personalizado.
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
