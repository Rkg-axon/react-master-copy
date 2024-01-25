import { Icon } from '@app/_components/_core/Icon';
import { Theme } from '@emotion/react';
import { Link } from '@jumbo/shared';
import { JumboThemeOptions, NavbarItem } from '@jumbo/types';
import CircleIcon from '@mui/icons-material/Circle';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
  SxProps,
  ThemeOptions,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useJumboNavItemSx } from '../../hooks';
type JumboNavItemProps = {
  item: NavbarItem | undefined;
  isNested: boolean;
  miniAndClosed: boolean;
  theme: JumboThemeOptions;
};

function JumboNavItem({
  item,
  isNested,
  miniAndClosed,
  theme,
}: JumboNavItemProps) {
  const navSx: SxProps<Theme> = useJumboNavItemSx(
    item?.path ?? '',
    miniAndClosed,
    theme
  );

  //TODO: this component depends on this useTranslations
  const t = useTranslations();

  if (!item) return null;

  return (
    <ListItemButton component={'li'} sx={{ ...navSx }}>
      <MuiLink
        component={Link}
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
            primary={t(item.label)}
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
      </MuiLink>
    </ListItemButton>
  );
}

export { JumboNavItem };
