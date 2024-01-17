'use client';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';

import {
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
} from '@jumbo/utilities/constants';
import { SxProps, Theme } from '@mui/material';
import React, { useContext } from 'react';
import { JumboLayoutContext } from '../components';

function useJumboLayout() {
  return useContext(JumboLayoutContext);
}

function useSidebarDrawerHandlers() {
  const { sidebarOptions, setSidebarOptions } = useJumboLayout();
  const handleClose = React.useCallback(() => {
    if (setSidebarOptions) {
      setSidebarOptions({ open: false });
    }
  }, [setSidebarOptions]);

  const handleMouseEnter = React.useCallback(() => {
    if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI) {
      if (setSidebarOptions) {
        setSidebarOptions({
          variant: SIDEBAR_VARIANTS.PERSISTENT,
          open: true,
        });
      }
    }
  }, [sidebarOptions?.view, setSidebarOptions]);

  const handleMouseLeave = React.useCallback(() => {
    if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI && setSidebarOptions) {
      setSidebarOptions({ variant: SIDEBAR_VARIANTS.PERMANENT, open: false });
    }
  }, [sidebarOptions?.view, setSidebarOptions]);

  return {
    handleClose,
    handleMouseEnter,
    handleMouseLeave,
  };
}

function useSidebarDrawerSx() {
  const { sidebarOptions } = useJumboLayout();
  const { sidebarTheme } = useJumboSidebarTheme();
  const sx: SxProps<Theme> = {
    '& .MuiDrawer-paper': {
      border: 'none',
      boxShadow: 25,
      transition: (theme) => theme.transitions.create(['width']),
      width:
        sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions.open
          ? sidebarOptions?.minWidth
          : sidebarOptions?.width,
      ...(sidebarTheme.bgimage
        ? {
            background: `url(${sidebarTheme.bgimage}) no-repeat center`,
            backgroundSize: 'cover',
          }
        : {}),
    },
  };

  return sx;
}

function useDrawerVariant() {
  const { sidebarOptions } = useJumboLayout();
  return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && sidebarOptions?.open
    ? SIDEBAR_VARIANTS.TEMPORARY
    : sidebarOptions?.variant;
}

function useHeaderSpaceSx() {
  const { headerOptions } = useJumboLayout();

  const headerHeightProps: SxProps<Theme> = React.useMemo(() => {
    //TODO: fix the height property issue
    if (headerOptions?.sx?.height) {
      return { height: headerOptions.sx.height };
    }
    return {};
  }, [headerOptions?.sx]);

  return headerHeightProps;
}

function useHeaderMargin() {
  const { headerOptions, sidebarOptions } = useJumboLayout();
  return React.useMemo(() => {
    if (!headerOptions.fixed) {
      return 0;
    }

    if (sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY) {
      return 0;
    } else {
      if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI) {
        return sidebarOptions?.minWidth;
      } else {
        if (sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT) {
          return sidebarOptions?.open ? sidebarOptions?.width : 0;
        }
        return 0;
      }
    }
  }, [
    sidebarOptions?.open,
    sidebarOptions?.width,
    sidebarOptions?.minWidth,
    sidebarOptions?.view,
    sidebarOptions?.style,
    sidebarOptions?.variant,
    headerOptions?.fixed,
  ]);
}

function useAppBarSx() {
  const { sidebarOptions, headerOptions } = useJumboLayout();
  const headerMarginLeft = useHeaderMargin();
  const appBarSx: SxProps<Theme> = React.useMemo(() => {
    //TODO: code cleaning - need to learn how to destructure two SxProps to combine into one
    if (headerOptions?.sx) {
      return {
        ...headerOptions.sx,
        width: { sm: `calc(100% - ${headerMarginLeft}px)` },
        ml: { sm: `${headerMarginLeft}px` },
        transition: (theme: Theme) => theme.transitions.create(['width']),
        zIndex: (theme: Theme) =>
          sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY ||
          sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT
            ? theme.zIndex.drawer - 1
            : theme.zIndex.drawer + 1,
      };
    } else {
      return {
        width: { sm: `calc(100% - ${headerMarginLeft}px)` },
        ml: { sm: `${headerMarginLeft}px` },
        transition: (theme: Theme) => theme.transitions.create(['width']),
        zIndex: (theme: Theme) =>
          sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY ||
          sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT
            ? theme.zIndex.drawer - 1
            : theme.zIndex.drawer + 1,
      };
    }
  }, [headerMarginLeft, sidebarOptions, headerOptions.sx]);

  return appBarSx;
}

export {
  useAppBarSx,
  useDrawerVariant,
  useHeaderMargin,
  useHeaderSpaceSx,
  useJumboLayout,
  useSidebarDrawerHandlers,
  useSidebarDrawerSx,
};
