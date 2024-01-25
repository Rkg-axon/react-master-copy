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
  type NavbarGroup,
  type NavbarItem,
  type NavbarSection,
};
