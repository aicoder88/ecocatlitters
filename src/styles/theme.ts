export const theme = {
  colors: {
    // The Eco-Warrior palette
    forestGreen: '#1B4332',
    leafGreen: '#2D6A4F',
    mossGreen: '#40916C',
    sageGreen: '#52B788',
    mintGreen: '#74C69D',
    paleGreen: '#B7E4C7',
    
    // Accent colors
    sunrise: '#FF6B35',
    sunriseLight: '#FF8C5A',
    golden: '#F7B538',
    
    // Neutrals
    charcoal: '#1A1A1A',
    darkGray: '#2D2D2D',
    gray: '#6B6B6B',
    lightGray: '#E8E8E8',
    offWhite: '#F9F9F7',
    white: '#FFFFFF',
    
    // Semantic
    crisis: '#DC2626',
    warning: '#F59E0B',
    success: '#10B981',
  },
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
};

export type Theme = typeof theme;
