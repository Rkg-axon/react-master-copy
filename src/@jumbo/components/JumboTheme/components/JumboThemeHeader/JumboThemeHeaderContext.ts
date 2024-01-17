'use client';
import { JumboThemeHeaderContextType } from '@jumbo/types';
import React from 'react';

const defaultContextValue: JumboThemeHeaderContextType = {
  headerTheme: {},
  setHeaderTheme: () => null,
};

const JumboThemeHeaderContext = React.createContext(defaultContextValue);

export { JumboThemeHeaderContext };
