'use client';
import { JumboThemeFooterContextType } from '@jumbo/types';
import React from 'react';

const defaultContextValue: JumboThemeFooterContextType = {
  footerTheme: {},
  setFooterTheme: () => null,
};

const JumboThemeFooterContext = React.createContext(defaultContextValue);

export { JumboThemeFooterContext };
