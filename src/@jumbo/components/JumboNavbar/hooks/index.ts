import { JumboThemeOptions } from '@jumbo/types';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { usePathname } from 'next/navigation';

function useJumboNavbar() {
  const pathname = usePathname();
  function isActive(path: string) {
    console.log('pathname, path', pathname, path);
    return pathname === path;
  }

  return { isActive };
}

function useJumboNavGroupSx(miniAndClosed: boolean, theme: JumboThemeOptions) {
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

  const sx: SxProps<Theme> = {
    p: (theme) => (!miniAndClosed ? theme.spacing(1, 3.75) : 0),
    borderRadius: miniAndClosed ? '50%' : '0 24px 24px 0',
    margin: miniAndClosed ? '0 auto' : '0',
    overflow: 'hidden',
    '&:hover': {
      color: theme.palette.nav?.action?.hover,
      backgroundColor: theme.palette.nav?.background?.hover,
      ...(!miniAndClosed && {
        '&::before': {
          ...menuBefore,
          backgroundColor: theme.palette.nav?.tick?.hover,
        },
      }),
    },
    ...(miniAndClosed
      ? {
          width: 40,
          height: 40,
          justifyContent: 'center',
        }
      : { '&::before': menuBefore }),
  };

  return sx;
}

function useJumboNavItemSx(
  path: string,
  miniAndClosed: boolean,
  theme: JumboThemeOptions
) {
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

  const { isActive } = useJumboNavbar();

  const sx: SxProps<Theme> = {
    p: 0,
    overflow: 'hidden',
    borderRadius: miniAndClosed ? '50%' : '0 24px 24px 0',
    margin: miniAndClosed ? '0 auto' : '0',
    ...(miniAndClosed
      ? { width: 40, height: 40, justifyContent: 'center' }
      : {}),
    ...(!miniAndClosed ? { '&::before': menuBefore } : {}),
    '&:hover': {
      color: (theme) => theme.palette.nav.action.hover,
      backgroundColor: (theme) => theme.palette.nav.background.hover,
      ...(!miniAndClosed
        ? {
            '&::before': {
              ...menuBefore,
              backgroundColor: (theme) => theme.palette.nav.tick.hover,
            },
          }
        : {}),
    },
    ...(isActive(path)
      ? {
          color: (theme) => theme.palette.nav.action.active,
          backgroundColor: (theme) => theme.palette.nav.background.active,
          ...(!miniAndClosed
            ? {
                '&::before': {
                  ...menuBefore,
                  backgroundColor: (theme) => theme.palette.nav.tick.active,
                },
              }
            : {}),
        }
      : {}),
  };
  return sx;
}
export { useJumboNavGroupSx, useJumboNavItemSx, useJumboNavbar };
