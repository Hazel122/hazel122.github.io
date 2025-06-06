export const theme = {
  colors: {
    primary: '#e56399',
    secondary: '#d3a588',
    background: '#ece2d0',
    accent: '#7fd1b9',
    text: '#7a6563',
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Quicksand', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease-in-out',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
    large: '0 8px 16px rgba(0,0,0,0.1)',
  },
} as const;

export type Theme = typeof theme; 