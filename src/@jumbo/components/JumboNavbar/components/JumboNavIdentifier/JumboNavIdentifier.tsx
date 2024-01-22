import { NavbarGroup, NavbarItem } from '@jumbo/types';
import { isNavbarGroup } from '@jumbo/utilities/helpers';
import { JumboNavGroup, JumboNavItem } from '..';

type JumboNavIdentifierProps = {
  item: NavbarGroup | NavbarItem;
  isNested?: boolean;
};

function JumboNavIdentifier({
  item,
  isNested = false,
}: JumboNavIdentifierProps) {
  if (!item) return null;

  if (isNavbarGroup(item)) {
    return <JumboNavGroup item={item} />;
  }

  return <JumboNavItem item={item} isNested={isNested} />;
}

export { JumboNavIdentifier };
