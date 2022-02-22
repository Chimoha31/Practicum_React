import React from 'react';

export const THEMES = {
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
  dark: {
    color: white,
    backgroundColor: '#222222',
  }
}

const ThemeContext = React.createContext([THEMES.dark, () => {}]);

export default ThemeContext;