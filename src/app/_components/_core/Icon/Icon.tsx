import { APP_ICONS } from '@app/_utilities/constants/icons';
import React from 'react';

function Icon({ name }: { name: string | undefined }): React.ReactNode {
  if (!name) return '';

  const appIcon = APP_ICONS.find((icon) => {
    return icon.name === name;
  });

  if (!appIcon) {
    return name ?? '';
  }

  const { Component, props } = appIcon;

  return <Component {...props} />;
}
export { Icon };
