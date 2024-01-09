import React from 'react';
import JumboThemeContext from './JumboThemeContext';
import { JumboThemeConfig } from './types/JumboThemeConfig';

function JumboTheme({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeConfig;
}) {
  return <div>{children}</div>;
}

export { JumboTheme };
