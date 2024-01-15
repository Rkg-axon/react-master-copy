import { SxProps, Theme } from '@mui/material/styles';

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

interface LayoutHeaderOptions {
  hide: boolean;
  fixed: boolean;
  sx?: SxProps<Theme>;
}

interface LayoutSidebarOptions {
  open: boolean;
  hide: boolean;
  width: number;
  minWidth: number;
  variant: SidebarVariantsType;
  style: SidebarStylesType;
  scrollType: SidebarScrollTypesType;
  view: SidebarViewsType;
  anchor: SidebarAnchorPositionsType;
  sx?: SxProps<Theme>;
}

interface LayoutFooterOptions {
  hide: boolean;
  sx?: SxProps<Theme>;
}

interface LayoutRootOptions {
  sx?: SxProps<Theme>;
}

interface LayoutContentOptions {
  sx?: SxProps<Theme>;
}

interface LayoutOptions {
  header: LayoutHeaderOptions;
  sidebar: LayoutSidebarOptions;
  footer: LayoutFooterOptions;
  root: LayoutRootOptions;
  content: LayoutContentOptions;
}

/**
 * header, sidebar, footer, root and contentOptions
 * are used to avoid putting "as" and
 * an extra step of destructuring
 * from the context value
 */
interface LayoutContext {
  layoutOptions: LayoutOptions;
  headerOptions: LayoutHeaderOptions;
  sidebarOptions: LayoutSidebarOptions;
  footerOptions: LayoutFooterOptions;
  rootOptions: LayoutRootOptions;
  contentOptions: LayoutContentOptions;
  setHeaderOptions?: (options: LayoutHeaderOptions) => void;
  setFooterOptions?: (options: LayoutFooterOptions) => void;
  setSidebarOptions?: (options: LayoutSidebarOptions) => void;
  setRootOptions?: (options: LayoutRootOptions) => void;
  setContentOptions?: (options: LayoutContentOptions) => void;
  setOptions?: (options: LayoutOptions) => void;
}

interface LayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export {
  LAYOUT_ACTIONS,
  LAYOUT_CONTAINER_STYLES,
  LAYOUT_DENSITIES,
  LayoutContainerStylesType,
  LayoutContentOptions,
  LayoutContext,
  LayoutDensitiesType,
  LayoutFooterOptions,
  LayoutHeaderOptions,
  LayoutOptions,
  LayoutProps,
  LayoutRootOptions,
  LayoutSidebarOptions,
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
