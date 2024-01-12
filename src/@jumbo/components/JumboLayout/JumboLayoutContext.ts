import {
  LayoutOptions,
  SIDEBAR_ANCHOR_POSITIONS,
  SIDEBAR_SCROLL_TYPES,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
} from '@jumbo/types';
import React from 'react';

const defaultLayout: LayoutOptions = {
  header: {
    hide: false,
    fixed: true,
  },
  sidebar: {
    open: true,
    hide: false,
    width: 240,
    minWidth: 80,
    variant: SIDEBAR_VARIANTS.PERMANENT,
    anchor: SIDEBAR_ANCHOR_POSITIONS.LEFT,
    scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
    style: SIDEBAR_STYLES.CLIPPED_UNDER_HEADER,
    view: SIDEBAR_VIEWS.FULL,
  },
  footer: {
    hide: false,
  },
};

const JumboLayoutContext = React.createContext(defaultLayout);

export { JumboLayoutContext };
