'use client';
import { useJumboLayout } from '@jumbo/components/JumboLayout/hooks';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { MenuItems, NavbarGroup, NavbarItem } from '@jumbo/types';
import { SIDEBAR_VIEWS } from '@jumbo/utilities/constants';
import { isNavbarGroup } from '@jumbo/utilities/helpers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
  item: NavbarGroup | NavbarItem | undefined;
};

function JumboNavGroup({ item }: JumboNavGroupProps) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLLIElement | null>(null);

  const { sidebarOptions } = useJumboLayout();
  const { sidebarTheme } = useJumboSidebarTheme();

  const isMiniAndClosed = React.useMemo(() => {
    return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
  }, [sidebarOptions.view, sidebarOptions.open]);

  const handlePopoverOpen = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handlePopoverClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  //   React.useEffect(() => {
  //     if (previousPath !== location.pathname) {
  //       setPreviousPath(location.pathname);
  //     }
  //   }, [item, location.pathname, previousPath]);

  //   React.useEffect(() => {
  //     setOpen(isUrlInChildren(item, previousPath));
  //   }, [item, previousPath]);

  if (!item) return null;

  const subMenus: MenuItems = isNavbarGroup(item)
    ? item?.children
      ? item.children
      : []
    : [];

  return (
    <React.Fragment>
      {/* TODO: need to clean this code */}
      <ListItemButton
        component={'li'}
        onClick={() => setOpen(!open)}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          p: (theme) => (!isMiniAndClosed ? theme.spacing(1, 3.75) : 0),
          borderRadius: isMiniAndClosed ? '50%' : '0 24px 24px 0',
          margin: isMiniAndClosed ? '0 auto' : '0',
          ...(isMiniAndClosed
            ? { width: 40, height: 40, justifyContent: 'center' }
            : {}),
          overflow: 'hidden',
          '&:hover': {
            color: sidebarTheme.palette.nav?.action?.hover,
            backgroundColor: sidebarTheme.palette.nav?.background?.hover,
            ...(!isMiniAndClosed
              ? {
                  '&::before': {
                    ...menuBefore,
                    backgroundColor: sidebarTheme.palette.nav?.tick?.hover,
                  },
                }
              : {}),
          },
          ...(!isMiniAndClosed ? { '&::before': menuBefore } : {}),
        }}
      >
        {!isMiniAndClosed && (
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
        {item.icon && (
          <ListItemIcon
            sx={{ minWidth: isMiniAndClosed ? 20 : 32, color: 'inherit' }}
          >
            {item.icon}
          </ListItemIcon>
        )}
        {!isMiniAndClosed && (
          <ListItemText
            primary={item.label}
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
