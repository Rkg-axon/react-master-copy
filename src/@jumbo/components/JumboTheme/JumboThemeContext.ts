'use client';
import { JumboThemeContextType, JumboThemeOptions } from '@jumbo/types';
import { createTheme } from '@mui/material';
import { enUS } from '@mui/material/locale';
import React from 'react';

const defaultContextValue: JumboThemeContextType = {
  theme: createTheme(),
  muiLocale: enUS,
  setTheme: (options: JumboThemeOptions) => null,
  setMuiLocale: () => null,
};

const JumboThemeContext = React.createContext(defaultContextValue);

export { JumboThemeContext };
