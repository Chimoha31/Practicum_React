import React, {useState} from 'react';
import {ThemeContext, THEMES} from './const/contexts/ThemeContext';
import {getLanguages} from './const/languages';
import {withLoading} from './hoc/withLoading';
import App from './App';

const AppComponent = withLoading(App, getLanguages);

const AppContainer = () => {
  const [theme, setTheme] = useState(THEMES.dark);

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