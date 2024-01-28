import { Theme } from '@mui/material';

type NavbarContext = {
  items: MenuItems;
  groupBehaviour: 'collapsible' | 'popover';
  mini: boolean;
  open: boolean;
  theme: Theme;
  miniAndClosed: boolean;
};

type NavbarItem = {
  label: string;
  path: string;
  icon?: string;
  target?: string;
};

type NavbarGroup = {
  label: string;
  children: (NavbarGroup | NavbarItem)[];
  collapsible?: boolean;
  icon?: string;
};

type NavbarSection = {
  label: string;
  children: (NavbarGroup | NavbarItem)[];
};

type MenuItem = NavbarSection | NavbarGroup | NavbarItem;
type MenuItems = MenuItem[];

export {
  type MenuItem,
  type MenuItems,
  type NavbarContext,
  type NavbarGroup,
  type NavbarItem,
  type NavbarSection,
};
