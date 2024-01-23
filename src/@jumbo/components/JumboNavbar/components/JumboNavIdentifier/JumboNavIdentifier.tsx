import { NavbarGroup, NavbarItem } from '@jumbo/types';
import { isNavGroup, isNavItem } from '@jumbo/utilities/helpers';
import { JumboNavGroup, JumboNavItem } from '..';

type JumboNavIdentifierProps = {
  item: NavbarGroup | NavbarItem;
  isNested?: boolean;
};

function JumboNavIdentifier({
  item,
  isNested = false,
}: JumboNavIdentifierProps) {
  if (isNavGroup(item)) {
    return <JumboNavGroup item={item} />;
  }

  if (isNavItem(item)) {
    return <JumboNavItem item={item} isNested={isNested} />;
  }

  return null;
}

export { JumboNavIdentifier };
