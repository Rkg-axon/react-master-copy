'use client';
import { LayoutProps } from '@jumbo/types';
import { Box, CssBaseline, Toolbar } from '@mui/material';

import { SIDEBAR_STYLES } from '@jumbo/utilities/constants';
import {
  JumboLayoutFooter,
  JumboLayoutHeader,
  JumboLayoutSidebar,
} from './components';
import { useHeaderMargin, useHeaderSpaceSx, useJumboLayout } from './hooks';

function JumboLayout(props: LayoutProps) {
  const { rootOptions, sidebarOptions, headerOptions, contentOptions } =
    useJumboLayout();

  const headerSpaceSx = useHeaderSpaceSx();
  const contentMargin = useHeaderMargin();
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        minWidth: 0,
        minHeight: '100%',
        flexDirection: 'column',
        ...rootOptions?.sx,
      }}
      className='CmtLayout-root'
    >
      <CssBaseline />
      {sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
        <JumboLayoutHeader>{props.header}</JumboLayoutHeader>
      )}

      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minWidth: 0,
          position: 'relative',
        }}
        className='CmtLayout-wrapper'
      >
        {props.sidebar && (
          <JumboLayoutSidebar>{props.sidebar}</JumboLayoutSidebar>
        )}
        <Box
          sx={{
            display: 'flex',
            minWidth: 0,
            flex: 1,
            flexDirection: 'column',
            minHeight: '100%',
            marginLeft: {
              sm: `${contentMargin}px`,
            },
            transition: (theme) => theme.transitions.create(['margin-left']),
          }}
          className='CmtLayout-main'
        >
          {sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
            <JumboLayoutHeader>{props.header}</JumboLayoutHeader>
          )}
          {!headerOptions.hide && headerOptions.fixed && (
            <Toolbar sx={{ ...headerSpaceSx }} />
          )}
          <Box
            sx={{
              display: 'flex',
              minWidth: 0,
              flex: 1,
              flexDirection: 'column',
              py: 4,
              px: { lg: 6, xs: 4 },
              ...(contentOptions?.sx ?? {}),
            }}
            className='CmtLayout-content'
          >
            {props.children}
          </Box>
          <JumboLayoutFooter>{props.footer}</JumboLayoutFooter>
        </Box>
      </Box>
    </Box>
  );
}

export { JumboLayout };
