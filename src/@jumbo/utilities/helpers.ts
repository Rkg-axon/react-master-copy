import {
  JumboThemeConfig,
  JumboThemeOptions,
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

function isNavbarItem(object: any): object is NavbarItem {
  return 'path' in object;
}

function isNavbarGroup(object: any): object is NavbarGroup {
  return !('path' in object);
}

function isNavbarGroupWithChildren(object: any): object is NavbarGroup {
  return 'children' in object && Array.isArray(object?.children);
}

export { isNavbarGroup, isNavbarGroupWithChildren, isNavbarItem };
