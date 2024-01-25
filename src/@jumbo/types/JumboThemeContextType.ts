import { Theme } from '@mui/material';
import { Localization } from '@mui/material/locale';
import React from 'react';
import { JumboThemeOptions, JumboThemeSidebarOptions } from './JumboTheme';

interface JumboThemeContextType {
  theme: Theme;
  setTheme: (options: JumboThemeOptions) => void;
  muiLocale?: Localization;
  setMuiLocale?: React.Dispatch<React.SetStateAction<Localization>>;
}

interface JumboThemeHeaderContextType {
  headerTheme: Theme;
  setHeaderTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>;
}

interface JumboThemeFooterContextType {
  footerTheme: Theme;
  setFooterTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>;
}

interface JumboThemeSidebarContextType {
  sidebarTheme: Theme;
  setSidebarTheme: React.Dispatch<
    React.SetStateAction<JumboThemeSidebarOptions>
  >;
}

export {
  type JumboThemeContextType,
  type JumboThemeFooterContextType,
  type JumboThemeHeaderContextType,
  type JumboThemeSidebarContextType,
};
