
# Components Structure

This project follows Atomic Design methodology for organizing components:

## Directory Structure
```
components/
├── atoms/          # Basic building blocks (Button, Input, Typography)
├── molecules/      # Simple combinations of atoms (SearchBar, Card)
├── organisms/      # Complex combinations of molecules (Header, Footer)
├── templates/      # Page-level component layouts
└── pages/          # Specific instances of templates
```

## Component Creation Guidelines

Each component should:
1. Have its own directory
2. Include component file (Component.jsx)
3. Include stories file (Component.stories.jsx)
4. Include styles if needed (Component.styles.js)
5. Include tests if needed (Component.test.js)

Example structure for a component:
```
Button/
├── Button.jsx
├── Button.stories.jsx
├── Button.styles.js  (optional)
├── Button.test.js   (optional)
└── index.js
```
