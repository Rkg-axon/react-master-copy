import { JumboThemeOptions, NavbarGroup, NavbarItem } from '@jumbo/types';
import { isNavGroup, isNavItem, isNavSection } from '@jumbo/utilities/helpers';
import { JumboNavGroup, JumboNavItem } from '..';
import { JumboNavSection } from '../JumboNavSection';

type JumboNavIdentifierProps = {
  item: NavbarGroup | NavbarItem;
  miniAndClosed: boolean;
  isNested?: boolean;
  theme: JumboThemeOptions;
};

function JumboNavIdentifier({
  item,
  isNested = false,
  miniAndClosed,
  theme,
}: JumboNavIdentifierProps) {
  if (isNavGroup(item)) {
    return (
      <JumboNavGroup item={item} miniAndClosed={miniAndClosed} theme={theme} />
    );
  } else if (isNavSection(item)) {
    return (
      <JumboNavSection
        item={item}
        miniAndClosed={miniAndClosed}
        theme={theme}
      />
    );
  } else if (isNavItem(item)) {
    return (
      <JumboNavItem
        item={item}
        miniAndClosed={miniAndClosed}
        isNested={isNested}
        theme={theme}
      />
    );
  }

  return null;
}

export { JumboNavIdentifier };
