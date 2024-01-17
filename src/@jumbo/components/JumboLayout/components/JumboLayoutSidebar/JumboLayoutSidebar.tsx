import React from 'react';

import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared/components/Div';
import { SIDEBAR_STYLES, SIDEBAR_VIEWS } from '@jumbo/utilities/constants';
import { Box, Drawer, Toolbar } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {
  useDrawerVariant,
  useHeaderSpaceSx,
  useJumboLayout,
  useSidebarDrawerHandlers,
  useSidebarDrawerSx,
} from '../../hooks';

function JumboLayoutSidebar({ children }: { children: React.ReactNode }) {
  const { sidebarTheme } = useJumboSidebarTheme();
  const { sidebarOptions } = useJumboLayout();

  const { handleClose, handleMouseEnter, handleMouseLeave } =
    useSidebarDrawerHandlers();

  const drawerSx = useSidebarDrawerSx();
  const drawerVariant = useDrawerVariant();
  const headerSpaceSx = useHeaderSpaceSx();

  if (sidebarOptions?.hide) {
    return null;
  }

  return (
    <ThemeProvider theme={sidebarTheme}>
      <Drawer
        sx={drawerSx}
        anchor={sidebarOptions?.anchor}
        open={sidebarOptions?.open}
        variant={drawerVariant}
        transitionDuration={300}
        ModalProps={{
          keepMounted: true,
        }}
        hideBackdrop={sidebarOptions?.view === SIDEBAR_VIEWS.MINI}
        onClose={handleClose}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            minWidth: 0,
            flexDirection: 'column',
            minHeight: '100%',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
            <Toolbar sx={{ flexShrink: 0, ...headerSpaceSx }} />
          )}
          {children}
        </Box>
        {sidebarTheme?.overlay?.bgcolor && (
          <Box
            sx={{
              position: 'absolute',
              height: '100%',
              left: 0,
              right: 0,
              top: 0,
              ...(Array.isArray(sidebarTheme.overlay.bgcolor) &&
              sidebarTheme.overlay.bgcolor.length > 0
                ? {
                    backgroundImage: `linear-gradient(${sidebarTheme.overlay.bgcolor[0]}, ${sidebarTheme.overlay.bgcolor[1]})`,
                    opacity: sidebarTheme.bgimage
                      ? sidebarTheme.overlay?.opacity ?? 0.85
                      : 1,
                  }
                : {
                    bgcolor: sidebarTheme.overlay.bgcolor,
                    opacity: sidebarTheme.overlay?.opacity ?? 1,
                  }),
            }}
          />
        )}
      </Drawer>
    </ThemeProvider>
  );
}

export { JumboLayoutSidebar };
