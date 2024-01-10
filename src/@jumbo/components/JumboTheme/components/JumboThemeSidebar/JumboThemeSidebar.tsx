'use client';

import React from 'react';
import { JumboThemeSidebarContext } from './JumboThemeSidebarContext';
import { createTheme } from '@mui/material/styles';
import { JumboThemeOptions, JumboThemeSidebarContextType } from '@jumbo/types';

const JumboThemeSidebar = ({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeOptions | undefined;
}) => {
  //todo: we can setup a default theme for sidebar here instead of {}
  const [sidebarTheme, setSidebarTheme] = React.useState(init ?? {});

  const themeSidebarContextValue: JumboThemeSidebarContextType = React.useMemo(
    () => ({
      sidebarTheme: createTheme(sidebarTheme),
      setSidebarTheme: setSidebarTheme,
    }),
    [sidebarTheme, setSidebarTheme]
  );

  return (
    <JumboThemeSidebarContext.Provider value={themeSidebarContextValue}>
      {children}
    </JumboThemeSidebarContext.Provider>
  );
};

export { JumboThemeSidebar };
