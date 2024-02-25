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

const getMarginStyle = (input?: number | string | (number | string)[]) => {
  let margin = {};
  if (!input) return margin;
  if (typeof input === 'number' || typeof input === 'string') {
    margin = typeof input === 'number' ? `${input}px` : input;
    return { top: margin, bottom: margin, left: margin, right: margin };
  } else if (Array.isArray(input)) {
    if (input.length === 1) {
      margin = typeof input[0] === 'number' ? `${input[0]}px` : input[0];
      return { top: margin, bottom: margin, left: margin, right: margin };
    } else if (input.length === 2) {
      const marginX = typeof input[0] === 'number' ? `${input[0]}px` : input[0];
      const marginY = typeof input[1] === 'number' ? `${input[1]}px` : input[1];
      return { top: marginY, bottom: marginY, left: marginX, right: marginX };
    } else if (input.length === 3 || input.length === 4) {
      const marginTop =
        typeof input[0] === 'number' ? `${input[0]}px` : input[0];
      const marginRight =
        typeof input[1] === 'number' ? `${input[1]}px` : input[1];
      const marginBottom =
        typeof input[2] === 'number' ? `${input[2]}px` : input[2];
      if (input.length === 3) {
        return {
          top: marginTop,
          bottom: marginBottom,
          left: 0,
          right: marginRight,
        };
      } else {
        const marginLeft =
          typeof input[3] === 'number' ? `${input[3]}px` : input[3];
        return {
          top: marginTop,
          bottom: marginBottom,
          left: marginLeft,
          right: marginRight,
        };
      }
    }
  }
  return {};
};

export { getMarginStyle, getNavChildren, isNavGroup, isNavItem, isNavSection };
