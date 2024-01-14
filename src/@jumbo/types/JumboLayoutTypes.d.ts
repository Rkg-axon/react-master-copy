import { SxProps } from '@mui/material';

enum SIDEBAR_VARIANTS {
  TEMPORARY = 'temporary',
  PERSISTENT = 'persistent',
  PERMANENT = 'permanent',
}
type SidebarVariantKeys = keyof typeof SIDEBAR_VARIANTS;
type SidebarVariantsType = (typeof SIDEBAR_VARIANTS)[SidebarVariantsKeys];

enum SIDEBAR_STYLES {
  FULL_HEIGHT = 'full-height',
  CLIPPED_UNDER_HEADER = 'clipped-under-header',
}
type SidebarStyleKeys = keyof typeof SIDEBAR_STYLES;
type SidebarStylesType = (typeof SIDEBAR_STYLES)[SidebarStyleKeys];

enum SIDEBAR_SCROLL_TYPES {
  DEFAULT = 'default',
  FIXED = 'fixed',
}
type SidebarScrollTypeKeys = keyof typeof SIDEBAR_SCROLL_TYPES;
type SidebarScrollTypesType =
  (typeof SIDEBAR_SCROLL_TYPES)[SidebarScrollTypeKeys];

enum SIDEBAR_ANCHOR_POSITIONS {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}
type SidebarAnchorPositionKeys = keyof typeof SIDEBAR_ANCHOR_POSITIONS;
type SidebarAnchorPositionsType =
  (typeof SIDEBAR_ANCHOR_POSITIONS)[SidebarAnchorPositionKeys];

enum LAYOUT_DENSITIES {
  STANDARD = 'standard',
  COMPACT = 'compact',
  COMFORTABLE = 'comfortable',
}
type LayoutDensityKeys = keyof typeof LAYOUT_DENSITIES;
type LayoutDensitiesType = (typeof LAYOUT_DENSITIES)[LayoutDensityKeys];

enum LAYOUT_CONTAINER_STYLES {
  FLUID = 'fluid',
  BOXED = 'boxed',
}
type LayoutContainerStyleKeys = keyof typeof LAYOUT_CONTAINER_STYLES;
type LayoutContainerStylesType =
  (typeof LAYOUT_CONTAINER_STYLES)[LayoutContainerStyleKeys];

enum POSITION_TYPES {
  STICKY = 'sticky',
  DEFAULT = 'default',
}
type PositionTypeKeys = keyof typeof POSITION_TYPES;
type PositionTypesType = (typeof POSITION_TYPES)[PositionTypeKeys];

enum SIDEBAR_VIEWS {
  MINI = 'mini',
  FULL = 'full',
}
type SidebarViewKeys = keyof typeof SIDEBAR_VIEWS;
type SidebarViewsType = (typeof SIDEBAR_VIEWS)[SidebarViewKeys];

enum LAYOUT_ACTIONS {
  SET_SIDEBAR_OPTIONS = 'set-sidebar-options',
  SET_HEADER_OPTIONS = 'set-header-options',
  SET_FOOTER_OPTIONS = 'set-footer-options',
  SET_OPTIONS = 'set-options',
  SET_ROOT_OPTIONS = 'set-root-options',
  SET_CONTENT_OPTIONS = 'set-content-options',
}

interface LayoutOptions {
  header: {
    hide: boolean;
    fixed: boolean;
    sx?: SxProps;
  };

  sidebar: {
    open: boolean;
    hide: boolean;
    width: number | string;
    minWidth: number | string;
    variant: SidebarVariantsType;
    style: SidebarStylesType;
    scrollType: SidebarScrollTypesType;
    view: SidebarViewsType;
    anchor: SidebarAnchorPositionsType;
    sx?: SxProps;
  };

  footer: {
    hide: boolean;
    sx?: SxProps;
  };

  root: {
    sx?: SxProps;
  };

  content: {
    sx?: SxProps;
  };
}

/**
 * header, sidebar, footer, root and contentOptions
 * are used to avoid putting "as" and
 * an extra step of destructuring
 * from the context value
 */
interface LayoutContext {
  layoutOptions: LayoutOptions;
  headerOptions: LayoutOptions.header;
  sidebarOptions: LayoutOptions.sidebar;
  footerOptions: LayoutOptions.footer;
  rootOptions: LayoutOptions.root;
  contentOptions: LayoutOptions.content;
  setHeaderOptions?: (options: LayoutOptions) => void;
  setFooterOptions?: (options: LayoutOptions) => void;
  setSidebarOptions?: (options: LayoutOptions) => void;
  setRootOptions?: (options: LayoutOptions) => void;
  setContentOptions?: (options: LayoutOptions) => void;
  setOptions?: (options: LayoutOptions) => void;
}

export {
  LAYOUT_ACTIONS,
  LAYOUT_CONTAINER_STYLES,
  LAYOUT_DENSITIES,
  LayoutContainerStylesType,
  LayoutContext,
  LayoutDensitiesType,
  LayoutOptions,
  SIDEBAR_ANCHOR_POSITIONS,
  SIDEBAR_SCROLL_TYPES,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
  SidebarAnchorPositionsType,
  SidebarScrollTypesType,
  SidebarStylesType,
  SidebarVariantsType,
  SidebarViewsType,
};
