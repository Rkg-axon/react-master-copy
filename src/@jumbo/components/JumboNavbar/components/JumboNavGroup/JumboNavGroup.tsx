'use client';
import { Div } from '@jumbo/shared';
import { JumboThemeOptions, MenuItems, NavbarGroup } from '@jumbo/types';
import { getNavChildren } from '@jumbo/utilities/helpers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import React from 'react';
import { useJumboNavGroupSx } from '../../hooks';
import { SubMenusCollapsible } from './components/SubMenusCollapsible';
import { SubMenusPopover } from './components/SubMenusPopover';

type JumboNavGroupProps = {
  item: NavbarGroup | undefined;
  miniAndClosed: boolean;
  theme: JumboThemeOptions;
};

function JumboNavGroup({ item, miniAndClosed, theme }: JumboNavGroupProps) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLLIElement | null>(null);

  const navGroupSx: SxProps<Theme> = useJumboNavGroupSx(miniAndClosed, theme);

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
    if (miniAndClosed) {
      if (!navItem.icon) return null;
      return (
        <ListItemIcon
          sx={{ minWidth: miniAndClosed ? 20 : 32, color: 'inherit' }}
        >
          {navItem.icon}
        </ListItemIcon>
      );
    }

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ListItemButton
        component={'li'}
        onClick={() => setOpen(!open)}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{ ...navGroupSx }}
      >
        {renderItem(item)}
      </ListItemButton>
      {subMenus !== undefined && !miniAndClosed && (
        <SubMenusCollapsible
          items={subMenus}
          open={open}
          miniAndClosed={miniAndClosed}
        />
      )}
      {subMenus && miniAndClosed && (
        <SubMenusPopover
          items={subMenus}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          miniAndClosed={miniAndClosed}
        />
      )}
    </React.Fragment>
  );
}

export { JumboNavGroup };
