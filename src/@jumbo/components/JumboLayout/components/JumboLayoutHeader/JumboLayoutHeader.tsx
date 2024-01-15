import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from '@jumbo/types';
import { AppBar, SxProps, Theme, ThemeProvider, Toolbar } from '@mui/material';
import React from 'react';
import { useJumboLayout } from '../..';
import { useHeaderMargin } from './hooks';

function JumboLayoutHeader({ children }: { children: React.ReactNode }) {
  const { sidebarOptions, headerOptions } = useJumboLayout();
  const { headerTheme } = useJumboHeaderTheme();

  const extraSx: SxProps<Theme> = React.useMemo(() => {
    if (headerOptions?.sx) {
      const { width, ml, transition, zIndex, ...restSx } = headerOptions.sx;
      return restSx;
    }
    return {};
  }, [headerOptions?.sx]);

  //todo: need to cross check this calculation
  const headerMarginLeft = useHeaderMargin();

  if (headerOptions?.hide) return null;

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar
        elevation={0}
        position={headerOptions?.fixed ? 'fixed' : 'relative'}
        sx={{
          width: { sm: `calc(100% - ${headerMarginLeft}px)` },
          ml: { sm: `${headerMarginLeft}px` },
          transition: (theme) => theme.transitions.create(['width']),
          zIndex: (theme) =>
            sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY ||
            sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT
              ? theme.zIndex.drawer - 1
              : theme.zIndex.drawer + 1,
          ...extraSx,
        }}
      >
        <Toolbar sx={{ height: '100%', px: { lg: 6, xs: 4 } }}>
          {children}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export { JumboLayoutHeader };
