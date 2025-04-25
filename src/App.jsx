import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import * as ComponentLibrary from './components';

function ComponentPreview({ component, onBack }) {
  return (
    <Box sx={{ p: 4 }}>
      <Button onClick={onBack} startIcon={<ArrowBack />} sx={{ mb: 3 }}>
        Back to Components
      </Button>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>{component.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Category: {component.category}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>States</Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
            {component.states.map((state, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                • {state}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>Preview</Typography>
          <Box sx={{ p: 2, border: '1px dashed grey' }}>
            {component.preview}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

function App() {
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  const components = [
    {
      name: 'Button',
      category: 'Atoms',
      states: ['Default', 'Hover', 'Active', 'Disabled'],
      preview: (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <ComponentLibrary.Button variant="contained" color="primary">Primary</ComponentLibrary.Button>
          <ComponentLibrary.Button variant="contained" color="secondary">Secondary</ComponentLibrary.Button>
          <ComponentLibrary.Button variant="contained" color="tertiary">Tertiary</ComponentLibrary.Button>
          <ComponentLibrary.Button variant="outlined" color="primary">Outlined</ComponentLibrary.Button>
          <ComponentLibrary.Button variant="text" color="primary">Text</ComponentLibrary.Button>
          <ComponentLibrary.Button disabled>Disabled</ComponentLibrary.Button>
        </Box>
      ),
    },
    // Add more components here as they are created
  ];

  if (selectedComponent) {
    return (
      <ComponentPreview 
        component={selectedComponent} 
        onBack={() => setSelectedComponent(null)} 
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>Design System Components</Typography>
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Component</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>States</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {components.map((item, index) => (
                <TableRow 
                  key={index}
                  hover
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.states.join(', ')}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => setSelectedComponent(item)}
                      startIcon={<ArrowForward />}
                      size="small"
                    >
                      Ver detalle
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;