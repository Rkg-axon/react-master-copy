import { MenuItems } from '@jumbo/types';
import { Popover } from '@mui/material';
import { SubMenus } from '..';

type SubMenusPopoverProps = {
  items: MenuItems;
  anchorEl: HTMLLIElement | null;
  onClose: () => void;
};
function SubMenusPopover({ items, anchorEl, onClose }: SubMenusPopoverProps) {
  const open = Boolean(anchorEl);

  return (
    <Popover
      id='mouse-over-popover'
      sx={{
        pointerEvents: 'none',
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={onClose}
      disableRestoreFocus
    >
      <SubMenus items={items} />
    </Popover>
  );
}

export { SubMenusPopover };
