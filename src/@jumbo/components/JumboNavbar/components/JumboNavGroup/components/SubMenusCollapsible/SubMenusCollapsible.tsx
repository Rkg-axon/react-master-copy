import { MenuItems } from '@jumbo/types';
import { Collapse, CollapseProps } from '@mui/material';
import { SubMenus } from '..';

type SubMenusCollapsibleProps = CollapseProps & {
  items: MenuItems;
  open: boolean;
};

function SubMenusCollapsible({ items, open }: SubMenusCollapsibleProps) {
  return (
    <Collapse component={'li'} in={open} timeout='auto' unmountOnExit>
      <SubMenus items={items} />
    </Collapse>
  );
}

export { SubMenusCollapsible };
