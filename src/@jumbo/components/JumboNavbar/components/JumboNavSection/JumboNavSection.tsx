import { MenuItems, NavbarSection } from '@jumbo/types';
import { getNavChildren } from '@jumbo/utilities/helpers';
import { ListSubheader, Theme } from '@mui/material';
import { useTranslations } from 'next-intl';
import { JumboNavIdentifier } from '..';

type JumboNavSectionProps = {
  item: NavbarSection | undefined;
  miniAndClosed: boolean;
  theme: Theme;
};

function JumboNavSection({ item, miniAndClosed, theme }: JumboNavSectionProps) {
  //TODO: this component depends on this useTranslations
  const t = useTranslations();
  if (!item) return null;

  const subMenus: MenuItems = getNavChildren(item);

  return (
    <>
      {!miniAndClosed && (
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
          {t(item.label)}
        </ListSubheader>
      )}
      {subMenus &&
        subMenus.map((child, index) => {
          return (
            <JumboNavIdentifier
              item={child}
              miniAndClosed={miniAndClosed}
              key={index}
              theme={theme}
            />
          );
        })}
    </>
  );
}

export { JumboNavSection };
