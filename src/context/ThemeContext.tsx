'use client';

import {PropsWithChildren, createContext, useState} from 'react';

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

type ThemeType = 'dark' | 'light';
type ThemeContextType = {
  activeTheme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  activeTheme: DARK_THEME,
  toggleTheme: () => {},
});

export const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>(DARK_THEME);

  const toggleTheme = () => {
    setTheme((prev) => (prev === DARK_THEME ? LIGHT_THEME : DARK_THEME));
  };

  return (
    <ThemeContext.Provider value={{activeTheme: theme, toggleTheme: toggleTheme}}>
      <div className={`theme ${theme}`}>{props.children}</div>
    </ThemeContext.Provider>
  );
};
