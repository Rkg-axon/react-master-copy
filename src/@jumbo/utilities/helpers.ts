import {
  JumboThemeConfig,
  JumboThemeOptions,
  MenuItems,
  NavbarGroup,
  NavbarItem,
} from '@jumbo/types';
export const createJumboTheme = (
  mainTheme: JumboThemeOptions,
  headerTheme: JumboThemeOptions,
  sidebarTheme: JumboThemeOptions,
  footerTheme: JumboThemeOptions
) => {
  const theme: JumboThemeConfig = {
    main: mainTheme,
    header: {
      ...mainTheme,
      ...(headerTheme ?? {}),
    },
    sidebar: {
      ...mainTheme,
      ...(sidebarTheme ?? {}),
    },
    footer: {
      ...mainTheme,
      ...(footerTheme ?? {}),
    },
  };
  return theme;
};

function isNavItem(object: any): object is NavbarItem {
  return 'path' in object;
}

function isNavGroup(object: any): object is NavbarGroup {
  return !('path' in object);
}

function isNavSection(object: any): object is NavbarGroup {
  return !('path' in object) && !('collapsible' in object);
}

function isNavCollapsible(object: any): object is NavbarGroup {
  return !('path' in object) && 'collapsible' in object;
}

function isNavWithChildren(object: any): object is NavbarGroup {
  return 'children' in object && Array.isArray(object?.children);
}

function getNavChildren(item: NavbarGroup): MenuItems {
  if (item.children && Array.isArray(item.children)) {
    return item.children;
  }
  return [];
}

export { getNavChildren, isNavGroup, isNavItem, isNavSection };
