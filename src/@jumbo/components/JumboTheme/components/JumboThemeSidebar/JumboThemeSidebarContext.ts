import React from 'react';
import { enUS } from '@mui/material/locale';
import { JumboThemeSidebarContextType } from '@jumbo/types';

const defaultContextValue: JumboThemeSidebarContextType = {
  sidebarTheme: {},
  setSidebarTheme: () => null,
};

const JumboThemeSidebarContext = React.createContext(defaultContextValue);

export { JumboThemeSidebarContext };
