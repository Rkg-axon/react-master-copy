import React from 'react';
import { enUS } from '@mui/material/locale';
import { JumboThemeContextType, JumboThemeOptions } from '@jumbo/types';

const defaultContextValue: JumboThemeContextType = {
  theme: {},
  muiLocale: enUS,
  setTheme: (options: JumboThemeOptions) => null,
  setMuiLocale: () => null,
};

const JumboThemeContext = React.createContext(defaultContextValue);

export { JumboThemeContext };
