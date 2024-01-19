'use client';
import { Logo, SidebarToggleButton } from '@app/_components/misc';
import { useSidebarState } from '@jumbo/components/JumboLayout/hooks';
import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';

import { SIDEBAR_STYLES } from '@jumbo/utilities/constants';

import { Stack } from '@mui/material';
import React from 'react';
import { Search, SearchIconButtonOnSmallScreen } from './components';

function Header() {
  const { isSidebarStyle } = useSidebarState();

  const [searchVisibility, setSearchVisibility] = React.useState(false);
  const { headerTheme } = useJumboHeaderTheme();

  const handleSearchVisibility = React.useCallback((value: boolean) => {
    setSearchVisibility(value);
  }, []);

  return (
    <React.Fragment>
      <SidebarToggleButton />
      {isSidebarStyle(SIDEBAR_STYLES.CLIPPED_UNDER_HEADER) && (
        <Logo sx={{ mr: 3 }} mode={headerTheme.type ?? 'light'} />
      )}
      <Search show={searchVisibility} onClose={handleSearchVisibility} />
      <Stack
        direction='row'
        alignItems='center'
        spacing={1.25}
        sx={{ ml: 'auto' }}
      >
        <SearchIconButtonOnSmallScreen onClick={handleSearchVisibility} />
        {/* <Message /> */}
        {/* <NotificationsDropdown />
        <AuthUserDropdown /> */}
      </Stack>
    </React.Fragment>
  );
}

export { Header };
