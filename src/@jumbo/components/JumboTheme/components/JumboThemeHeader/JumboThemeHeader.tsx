import React from 'react';
import JumboThemeHeaderContext from './JumboThemeHeaderContext';
import { createTheme } from '@mui/material/styles';
import { JumboThemeHeaderContextType, JumboThemeOptions } from '@jumbo/types';

const JumboThemeHeader = ({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeOptions;
}) => {
  const [headerTheme, setHeaderTheme] = React.useState(init);

  const themeHeaderContextValue: JumboThemeHeaderContextType = React.useMemo(
    () => ({
      headerTheme: createTheme(headerTheme),
      setHeaderTheme: setHeaderTheme,
    }),
    [headerTheme, setHeaderTheme]
  );

  return (
    <JumboThemeHeaderContext.Provider value={themeHeaderContextValue}>
      {children}
    </JumboThemeHeaderContext.Provider>
  );
};

export default JumboThemeHeader;
