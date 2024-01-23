import { Icon } from '@app/_components/_core/Icon';
import { useSidebarState } from '@jumbo/components/JumboLayout/hooks';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { Link } from '@jumbo/shared';
import { NavbarItem } from '@jumbo/types';
import CircleIcon from '@mui/icons-material/Circle';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeOptions,
} from '@mui/material';
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

type JumboNavItemProps = {
  item: NavbarItem | undefined;
  isNested: boolean;
};

function JumboNavItem({ item, isNested }: JumboNavItemProps) {
  const { sidebarTheme } = useJumboSidebarTheme();

  const { isMiniAndClosed } = useSidebarState();
  const miniAndClosed = isMiniAndClosed();

  if (!item) return null;

  return (
    <ListItemButton
      component={'li'}
      sx={{
        p: 0,
        overflow: 'hidden',
        borderRadius: miniAndClosed ? '50%' : '0 24px 24px 0',
        margin: miniAndClosed ? '0 auto' : '0',
        ...(miniAndClosed
          ? { width: 40, height: 40, justifyContent: 'center' }
          : {}),
        ...(!miniAndClosed ? { '&::before': menuBefore } : {}),
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
        ...(location.pathname === item?.path
          ? {
              color: sidebarTheme.palette.nav?.action?.active,
              backgroundColor: sidebarTheme.palette.nav?.background?.active,
              ...(!miniAndClosed
                ? {
                    '&::before': {
                      ...menuBefore,
                      backgroundColor: sidebarTheme.palette.nav?.tick?.active,
                    },
                  }
                : {}),
            }
          : {}),
      }}
    >
      <Link
        underline={'none'}
        href={item.path}
        {...(item.target ? { target: item.target } : {})}
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          color: 'inherit',
          p: (theme: ThemeOptions) =>
            !miniAndClosed
              ? typeof theme.spacing === 'function'
                ? theme.spacing(1)
                : 0
              : 0,
          ...(miniAndClosed ? { justifyContent: 'center' } : {}),
        }}
      >
        <ListItemIcon
          sx={{ minWidth: miniAndClosed ? 20 : 32, color: 'inherit' }}
        >
          {isNested ? (
            <CircleIcon sx={{ fontSize: 6, ml: 1 }} />
          ) : (
            <Icon name={item.icon} />
          )}
        </ListItemIcon>
        {!miniAndClosed && (
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
      </Link>
    </ListItemButton>
  );
}

export { JumboNavItem };
