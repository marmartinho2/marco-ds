
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Box,
  Divider
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import theme from './theme';
import { Button } from './components';

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
          <Typography variant="h6" gutterBottom>Variables/Props</Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Prop</strong></TableCell>
                  <TableCell><strong>Type</strong></TableCell>
                  <TableCell><strong>Default</strong></TableCell>
                  <TableCell><strong>Description</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries({
                  variant: { type: 'string', default: 'contained', description: 'Button variant (contained, outlined, text)' },
                  color: { type: 'string', default: 'primary', description: 'Button color (primary, secondary, error, etc)' },
                  size: { type: 'string', default: 'medium', description: 'Button size (small, medium, large)' },
                  disabled: { type: 'boolean', default: 'false', description: 'Disable button state' },
                  fullWidth: { type: 'boolean', default: 'false', description: 'Make button take full width' },
                  children: { type: 'node', default: '-', description: 'Button content' },
                }).map(([prop, details]) => (
                  <TableRow key={prop}>
                    <TableCell>{prop}</TableCell>
                    <TableCell>{details.type}</TableCell>
                    <TableCell>{details.default}</TableCell>
                    <TableCell>{details.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>Preview</Typography>
          <Box sx={{ p: 2, border: '1px dashed grey' }}>
            {component.component}
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>Variants</Typography>
          {component.variants}
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
      states: ['Default', 'Hover', 'Active', 'Disabled', 'Loading'],
      variants: (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Box>
      )
    },
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
