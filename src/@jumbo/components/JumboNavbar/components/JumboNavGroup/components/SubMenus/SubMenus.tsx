import { MenuItems } from '@jumbo/types';
import { List } from '@mui/material';
import { JumboNavIdentifier } from '../../../JumboNavIdentifier/JumboNavIdentifier';

type SubMenusProps = {
  items: MenuItems;
};

function SubMenus({ items }: SubMenusProps) {
  return (
    <List disablePadding>
      {items.map((child, index) => {
        const eventKey = new Date().valueOf();
        return (
          <JumboNavIdentifier
            item={child}
            key={`${eventKey}${index}`}
            isNested={true}
          />
        );
      })}
    </List>
  );
}

export { SubMenus };
