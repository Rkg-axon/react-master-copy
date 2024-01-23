import { MenuItems } from '@jumbo/types';
import { useMediaQuery } from '@mui/material';

function useSmallScreen(): boolean {
  return useMediaQuery('(max-width:575px)');
}

function useMenus(menus: MenuItems) {
  
}
export { useSmallScreen };
