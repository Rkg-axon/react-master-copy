'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { enUS } from '@mui/material/locale';
import React from 'react';

import {
  JumboThemeConfig,
  JumboThemeContextType,
  JumboThemeOptions,
} from '@jumbo/types';

import {
  JumboThemeFooter,
  JumboThemeHeader,
  JumboThemeSidebar,
} from './components';

import { JumboThemeContext } from './JumboThemeContext';

function JumboTheme({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeConfig;
}) {
  const [theme, setTheme] = React.useState(createTheme(init.main));
  const [muiLocale, setMuiLocale] = React.useState(enUS);

  const updateTheme = React.useCallback(
    (options: JumboThemeOptions) => {
      setTheme(createTheme({ ...theme, ...options }, muiLocale));
    },
    [theme, muiLocale]
  );

  const themeContextValue: JumboThemeContextType = React.useMemo(
    () => ({
      theme,
      muiLocale,
      setTheme: updateTheme,
      setMuiLocale,
    }),
    [theme, muiLocale, updateTheme]
  );

  return (
    <JumboThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        <JumboThemeHeader init={init.header}>
          <JumboThemeSidebar init={init.sidebar}>
            <JumboThemeFooter init={init.footer}>{children}</JumboThemeFooter>
          </JumboThemeSidebar>
        </JumboThemeHeader>
      </ThemeProvider>
    </JumboThemeContext.Provider>
  );
}

export { JumboTheme };
