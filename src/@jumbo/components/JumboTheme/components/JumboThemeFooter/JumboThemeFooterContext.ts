import React from 'react';
import { JumboThemeFooterContextType } from '@jumbo/types';

const defaultContextValue: JumboThemeFooterContextType = {
  footerTheme: {},
  setFooterTheme: () => null,
};

const JumboThemeFooterContext = React.createContext(defaultContextValue);

export { JumboThemeFooterContext }
