'use client';
import React from 'react';
import { Logo, SearchGlobal } from '@app/_components/misc';
import { MessagesPopover } from '@app/_components/popovers/MessagesPopover';
import { JumboIconButton } from '@jumbo/components';
import { useJumboLayout } from '@jumbo/components/JumboLayout/hooks';
import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from '@jumbo/utilities/constants';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Slide, Stack, useMediaQuery } from '@mui/material';

function Header() {
  const { sidebarOptions, setSidebarOptions } = useJumboLayout();

  const [dropdownSearchVisibility, setDropdownSearchVisibility] =
    React.useState(false);
  const { headerTheme } = useJumboHeaderTheme();

  const showDropdownSearch = useMediaQuery('(max-width:575px)');

  return (
    <React.Fragment>
      {(sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER ||
        sidebarOptions.variant === SIDEBAR_VARIANTS.TEMPORARY ||
        (sidebarOptions.variant === SIDEBAR_VARIANTS.PERSISTENT &&
          !sidebarOptions.open)) && (
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{
            ml:
              sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER
                ? -2
                : 0,
            mr: 3,
          }}
          onClick={() => setSidebarOptions({ open: !sidebarOptions.open })}
        >
          {sidebarOptions?.open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      )}
      {sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
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
        <MessagesPopover />
        {/* <NotificationsDropdown />
        <AuthUserDropdown /> */}
      </Stack>
    </React.Fragment>
  );
}

export { Header };
