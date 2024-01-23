type NavbarItem = {
  label: string;
  path: string;
  icon?: string;
  target?: string;
};

type NavbarGroup = {
  label: string;
  collapsible?: boolean;
  icon?: string;
  children?: (NavbarGroup | NavbarItem)[];
};

type MenuItems = (NavbarGroup | NavbarItem)[];

export { type MenuItems, type NavbarGroup, type NavbarItem };
