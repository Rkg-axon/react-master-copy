import { JumboThemeOptions, NavbarGroup, NavbarItem } from '@jumbo/types';
import { isNavGroup, isNavItem, isNavSection } from '@jumbo/utilities/helpers';
import { JumboNavGroup, JumboNavItem } from '..';
import { JumboNavSection } from '../JumboNavSection';

type JumboNavIdentifierProps = {
  item: NavbarGroup | NavbarItem;
  miniAndClosed: boolean;
  isNested?: boolean;
  groupBehaviour: 'collapsible' | 'popover';
  theme: JumboThemeOptions;
};

function JumboNavIdentifier({
  item,
  isNested = false,
  miniAndClosed,
  groupBehaviour = 'collapsible',
  theme,
}: JumboNavIdentifierProps) {
  if (isNavGroup(item)) {
    return (
      <JumboNavGroup
        item={item}
        miniAndClosed={miniAndClosed}
        theme={theme}
        groupBehaviour={groupBehaviour}
      />
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
