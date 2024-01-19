'use client';
import { Logo, SearchGlobal, SidebarToggleButton } from '@app/_components/misc';
import { JumboIconButton } from '@jumbo/components';
import { useSidebarState } from '@jumbo/components/JumboLayout/hooks';
import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { SIDEBAR_STYLES } from '@jumbo/utilities/constants';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Slide, Stack, useMediaQuery } from '@mui/material';
import React from 'react';

function Header() {
  const { isSidebarStyle } = useSidebarState();

  const [dropdownSearchVisibility, setDropdownSearchVisibility] =
    React.useState(false);
  const { headerTheme } = useJumboHeaderTheme();

  const showDropdownSearch = useMediaQuery('(max-width:575px)');

  return (
    <React.Fragment>
      <SidebarToggleButton />
      {isSidebarStyle(SIDEBAR_STYLES.CLIPPED_UNDER_HEADER) && (
        <Logo sx={{ mr: 3 }} mode={headerTheme.type ?? 'light'} />
      )}
      {showDropdownSearch && (
        <Slide in={dropdownSearchVisibility}>
          <Div
            sx={{
              zIndex: 5,
              left: 0,
              right: 0,
              position: 'absolute',
              height: '100%',
            }}
          >
            <SearchGlobal
              sx={{
                maxWidth: 'none',
                height: '100%',
                display: 'flex',

                '& .MuiInputBase-root': {
                  flex: 1,
                  borderRadius: 0,
                  background: (theme) => theme.palette.background.default,
                },
                '& .MuiInputBase-input': {
                  pr: 6,
                },
              }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                right: 15,
                top: '50%',
                color: 'inherit',
                transform: 'translateY(-50%)',
              }}
              onClick={() => setDropdownSearchVisibility(false)}
            >
              <CloseIcon />
            </IconButton>
          </Div>
        </Slide>
      )}
      {!showDropdownSearch && (
        <SearchGlobal
          sx={{
            maxWidth: { xs: 240, md: 320 },
          }}
        />
      )}
      <Stack
        direction='row'
        alignItems='center'
        spacing={1.25}
        sx={{ ml: 'auto' }}
      >
        {showDropdownSearch && (
          <JumboIconButton
            elevation={25}
            onClick={() => setDropdownSearchVisibility(true)}
          >
            <SearchIcon fontSize={'small'} />
          </JumboIconButton>
        )}
        {/* <Message /> */}
        {/* <NotificationsDropdown />
        <AuthUserDropdown /> */}
      </Stack>
    </React.Fragment>
  );
}

export { Header };
