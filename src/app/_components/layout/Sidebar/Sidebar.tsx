import { JumboNavbar } from '@jumbo/components';
import { JumboScrollbar } from '@jumbo/components/JumboScrollbar';
import { Div } from '@jumbo/shared';
import React, { Suspense } from 'react';
import { SidebarHeader, SidebarSkeleton } from './components';
import { menus } from './menus';

const Sidebar = () => {
  return (
    <React.Fragment>
      <SidebarHeader />
      <JumboScrollbar height={800}>
        <Suspense
          fallback={
            <Div
              sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'center',
                alignContent: 'center',
                px: 3,
              }}
            >
              <SidebarSkeleton />
            </Div>
          }
        >
          {/* <SidebarSkeleton /> */}
          <JumboNavbar items={menus} groupBehaviour='collapsible' />
        </Suspense>
      </JumboScrollbar>
    </React.Fragment>
  );
};

export { Sidebar };
