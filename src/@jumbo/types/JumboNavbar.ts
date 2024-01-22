type NavbarItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
  target?: string;
};

type NavbarGroup = {
  label: string;
  collapsible?: boolean;
  icon?: React.ReactNode;
  children?: (NavbarGroup | NavbarItem)[];
};

type MenuItems = (NavbarGroup | NavbarItem)[];

export { type MenuItems, type NavbarGroup, type NavbarItem };
