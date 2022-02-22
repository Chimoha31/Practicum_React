import React, {useState} from 'react';
import {ThemeContext, THEMES} from './const/contexts/ThemeContext';
import {withLoading} from './hoc/withLoading';
import App from './App';
import {getLanguage} from './const/languages';

const AppComponent = withLoading(App, getLanguage);

const AppContainer = () => {
  const [theme, setTheme] = (THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = (theme === THEMES.dark) ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  }
  
  return(
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  )
}

export default AppContainer;