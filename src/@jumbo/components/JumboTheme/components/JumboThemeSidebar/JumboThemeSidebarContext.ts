'use client';
import { JumboThemeSidebarContextType } from '@jumbo/types';
import React from 'react';

const defaultContextValue: JumboThemeSidebarContextType = {
  sidebarTheme: {},
  setSidebarTheme: () => null,
};

const JumboThemeSidebarContext = React.createContext(defaultContextValue);

export { JumboThemeSidebarContext };
