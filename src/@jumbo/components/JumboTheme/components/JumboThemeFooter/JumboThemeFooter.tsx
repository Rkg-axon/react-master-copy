'use client';

import { JumboThemeFooterContextType, JumboThemeOptions } from '@jumbo/types';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import { JumboThemeFooterContext } from './JumboThemeFooterContext';

const JumboThemeFooter = ({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeOptions | undefined;
}) => {
  //todo: we can setup a default theme for footer here instead of {}
  const [footerTheme, setFooterTheme] = React.useState(init ?? {});

  const themeFooterContextValue: JumboThemeFooterContextType = React.useMemo(
    () => ({
      footerTheme: createTheme(footerTheme),
      setFooterTheme: setFooterTheme,
    }),
    [footerTheme, setFooterTheme]
  );

  return (
    <JumboThemeFooterContext.Provider value={themeFooterContextValue}>
      {children}
    </JumboThemeFooterContext.Provider>
  );
};

export { JumboThemeFooter };
