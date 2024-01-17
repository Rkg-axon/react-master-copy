import {
  LayoutContentOptions,
  LayoutFooterOptions,
  LayoutHeaderOptions,
  LayoutOptions,
  LayoutRootOptions,
  LayoutSidebarOptions,
} from '@jumbo/types';
import { LAYOUT_ACTIONS } from '@jumbo/utilities/constants';

function jumboLayoutReducer(
  state: LayoutOptions,
  action: {
    type: string;
    payload:
      | LayoutOptions
      | LayoutHeaderOptions
      | LayoutFooterOptions
      | LayoutContentOptions
      | LayoutSidebarOptions
      | LayoutRootOptions;
  }
): LayoutOptions {
  switch (action.type) {
    case LAYOUT_ACTIONS.SET_OPTIONS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export { jumboLayoutReducer };
