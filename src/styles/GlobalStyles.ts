import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Accounts for fixed navbar */
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: 3.5rem;
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.75rem;
    }
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.body};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }

  main {
    padding-top: 80px; /* Accounts for fixed navbar */
  }
`; 