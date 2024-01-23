'use client';
import { useSidebarState } from '@jumbo/components/JumboLayout/hooks';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { MenuItems, NavbarGroup } from '@jumbo/types';
import { getNavChildren, isNavSection } from '@jumbo/utilities/helpers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React from 'react';
import { SubMenusCollapsible } from './components/SubMenusCollapsible';
import { SubMenusPopover } from './components/SubMenusPopover';

const menuBefore = {
  left: 0,
  top: 0,
  content: `''`,
  position: 'absolute',
  display: 'inline-block',
  width: '4px',
  height: '100%',
  backgroundColor: 'transparent',
};

type JumboNavGroupProps = {
  item: NavbarGroup | undefined;
};

function JumboNavGroup({ item }: JumboNavGroupProps) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLLIElement | null>(null);

  const { sidebarTheme } = useJumboSidebarTheme();

  const { isMiniAndClosed } = useSidebarState();
  const miniAndClosed = isMiniAndClosed();

  const handlePopoverOpen = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handlePopoverClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  if (!item) return null;

  const subMenus: MenuItems = getNavChildren(item);

  function renderItem(navItem: NavbarGroup) {
    if (isNavSection(navItem)) {
      return (
        <ListSubheader
          component='li'
          disableSticky
          sx={{
            fontSize: '80%',
            fontWeight: '400',
            lineHeight: 'normal',
            textTransform: 'uppercase',
            bgcolor: 'transparent',
            p: (theme) => theme.spacing(3.75, 3.75, 1.875),
          }}
        >
          {navItem.label}
        </ListSubheader>
      );
    }
    return (
      <ListItemButton
        component={'li'}
        onClick={() => setOpen(!open)}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          p: (theme) => (!miniAndClosed ? theme.spacing(1, 3.75) : 0),
          borderRadius: miniAndClosed ? '50%' : '0 24px 24px 0',
          margin: miniAndClosed ? '0 auto' : '0',
          ...(miniAndClosed
            ? { width: 40, height: 40, justifyContent: 'center' }
            : {}),
          overflow: 'hidden',
          '&:hover': {
            color: sidebarTheme.palette.nav?.action?.hover,
            backgroundColor: sidebarTheme.palette.nav?.background?.hover,
            ...(!miniAndClosed
              ? {
                  '&::before': {
                    ...menuBefore,
                    backgroundColor: sidebarTheme.palette.nav?.tick?.hover,
                  },
                }
              : {}),
          },
          ...(!miniAndClosed ? { '&::before': menuBefore } : {}),
        }}
      >
        {!miniAndClosed && (
          <Div
            sx={{
              position: 'absolute',
              left: 5,
              display: 'inline-flex',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </Div>
        )}
        {navItem.icon && (
          <ListItemIcon
            sx={{ minWidth: miniAndClosed ? 20 : 32, color: 'inherit' }}
          >
            {navItem.icon}
          </ListItemIcon>
        )}
        {!miniAndClosed && (
          <ListItemText
            primary={navItem.label}
            sx={{
              m: 0,
              '& .MuiTypography-root': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
          />
        )}
      </ListItemButton>
    );
  }

  return (
    <React.Fragment>
      {/* TODO: need to clean this code */}
      {renderItem(item)}

      {subMenus !== undefined && !isMiniAndClosed && (
        <SubMenusCollapsible items={subMenus} open={open} />
      )}
      {subMenus && isMiniAndClosed && (
        <SubMenusPopover
          items={subMenus}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
        />
      )}
    </React.Fragment>
  );
}

export { JumboNavGroup };
