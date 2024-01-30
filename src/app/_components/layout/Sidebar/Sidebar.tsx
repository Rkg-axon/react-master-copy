'use client';
import { JumboNavbar } from '@jumbo/components';
import { JumboScrollbar } from '@jumbo/components/JumboScrollbar';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { MenuItems } from '@jumbo/types';
import React, { Suspense } from 'react';
import { SidebarHeader, SidebarSkeleton } from './components';

type SidebarProps = {
  menus: MenuItems;
};

function Sidebar({ menus }: SidebarProps) {
  const { sidebarTheme } = useJumboSidebarTheme();
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
          <JumboNavbar items={menus} theme={sidebarTheme} />
        </Suspense>
      </JumboScrollbar>
    </React.Fragment>
  );
}

export { Sidebar };
