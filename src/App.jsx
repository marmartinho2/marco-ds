
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
import { ArrowBack } from '@mui/icons-material';
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
      component: <Button>Sample Button</Button>,
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
                <TableCell sx={{ fontWeight: 'bold' }}>Preview</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {components.map((item, index) => (
                <TableRow 
                  key={index}
                  hover
                  onClick={() => setSelectedComponent(item)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.component}</TableCell>
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
