import {
  JumboThemeConfig,
  JumboThemeOptions,
  NavbarGroup,
  NavbarItem,
  NavbarSection,
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
  return (
    !('path' in object) &&
    'label' in object &&
    'children' in object &&
    'collapsible' in object
  );
}

function isNavSection(object: any): object is NavbarSection {
  return (
    !('path' in object) &&
    !('collapsible' in object) &&
    'label' in object &&
    'children' in object
  );
}

function getNavChildren(item: NavbarGroup | NavbarSection) {
  if (item.children && Array.isArray(item.children)) {
    return item.children;
  }
  return [];
}

export { getNavChildren, isNavGroup, isNavItem, isNavSection };
