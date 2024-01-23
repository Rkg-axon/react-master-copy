import { APP_ICONS } from '@app/_utilities/constants/icons';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import React, { CSSProperties } from 'react';

function Icon(
  name: string,
  { sx, style }: { sx?: SxProps<Theme>; style?: CSSProperties }
): React.ReactNode {
  const appIcon = APP_ICONS.find((icon) => {
    return icon.name === name;
  });

  if (!appIcon) {
    return name;
  }

  const { Component, props } = appIcon;

  return <Component {...props} />;
}
export { Icon };
