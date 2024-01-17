import { Localization } from '@mui/material/locale';
import React from 'react';
import { JumboThemeOptions, JumboThemeSidebarOptions } from './JumboTheme';

interface JumboThemeContextType {
  theme: JumboThemeOptions;
  setTheme: (options: JumboThemeOptions) => void;
  muiLocale?: Localization;
  setMuiLocale?: React.Dispatch<React.SetStateAction<Localization>>;
}

interface JumboThemeHeaderContextType {
  headerTheme: JumboThemeOptions;
  setHeaderTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>;
}

interface JumboThemeFooterContextType {
  footerTheme: JumboThemeOptions;
  setFooterTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>;
}

interface JumboThemeSidebarContextType {
  sidebarTheme: JumboThemeSidebarOptions;
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
