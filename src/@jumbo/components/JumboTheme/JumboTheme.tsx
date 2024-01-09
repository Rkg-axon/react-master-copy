import React from 'react';
import { createTheme } from '@mui/material';
import { enUS } from '@mui/material/locale';
import JumboThemeContext from './JumboThemeContext';
import {
  JumboThemeConfig,
  JumboThemeContextType,
  JumboThemeOptions,
} from '@jumbo/types';

function JumboTheme({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeConfig;
}) {
  const [theme, setTheme] = React.useState(init.main);
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
    [theme, muiLocale]
  );

  return (
    <JumboThemeContext.Provider value={themeContextValue}>
      {children}
    </JumboThemeContext.Provider>
  );
}

export { JumboTheme };
