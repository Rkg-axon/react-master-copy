import { CONFIG } from '@app/_config';
import { defaultLayoutConfig } from '@app/_config/layouts';

import {
  JumboConfigProvider,
  JumboLayoutProvider,
  JumboTheme,
} from '@jumbo/components';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';
import { NextIntlLink } from '../Link';

function AppBuilder({ children }: { children: React.ReactNode }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <JumboConfigProvider LinkComponent={NextIntlLink}>
        <JumboTheme init={CONFIG.THEME}>
          <JumboLayoutProvider layoutConfig={defaultLayoutConfig}>
            {children}
          </JumboLayoutProvider>
        </JumboTheme>
      </JumboConfigProvider>
    </NextIntlClientProvider>
  );
}

export { AppBuilder };
