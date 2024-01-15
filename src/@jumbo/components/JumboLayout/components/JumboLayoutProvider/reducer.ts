import { LAYOUT_ACTIONS, LayoutContentOptions, LayoutFooterOptions, LayoutHeaderOptions, LayoutOptions, LayoutRootOptions, LayoutSidebarOptions } from '@jumbo/types';

function jumboLayoutReducer(
  state: LayoutOptions,
  action: { type: string; payload: LayoutOptions | LayoutHeaderOptions | LayoutFooterOptions | LayoutContentOptions | LayoutSidebarOptions | LayoutRootOptions }
): LayoutOptions {
  switch (action.type) {
    case LAYOUT_ACTIONS.SET_OPTIONS: 
    return {
        ...state,
        
    }
    default:
      return state;
  }
}

export { jumboLayoutReducer };
