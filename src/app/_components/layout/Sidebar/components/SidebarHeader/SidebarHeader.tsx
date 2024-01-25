'use client';
import { Logo } from '@app/_components/misc';
import { useJumboLayout } from '@jumbo/components/JumboLayout/hooks';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { SIDEBAR_STYLES, SIDEBAR_VIEWS } from '@jumbo/utilities/constants';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton, Zoom } from '@mui/material';
import React from 'react';
import { SidebarHeaderDiv } from '..';

function SidebarHeader() {
  const { sidebarOptions, setSidebarOptions } = useJumboLayout();
  const { sidebarTheme } = useJumboSidebarTheme();

  const isMiniAndClosed = React.useMemo(() => {
    return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
  }, [sidebarOptions.view, sidebarOptions.open]);

  return (
    <React.Fragment>
      {sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
        <SidebarHeaderDiv>
          <Logo mini={isMiniAndClosed} mode={sidebarTheme.type} />
          {sidebarOptions?.view !== SIDEBAR_VIEWS.MINI && (
            <Zoom in={sidebarOptions?.open}>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ ml: 0, mr: -1.5 }}
                onClick={() => setSidebarOptions({ open: false })}
              >
                <MenuOpenIcon />
              </IconButton>
            </Zoom>
          )}
        </SidebarHeaderDiv>
      )}
    </React.Fragment>
  );
}

export { SidebarHeader };
