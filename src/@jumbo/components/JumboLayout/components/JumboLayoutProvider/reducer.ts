import { LAYOUT_ACTIONS, LayoutOptions } from '@jumbo/types';

function jumboLayoutReducer(
  state: LayoutOptions,
  action: { type: string; payload: LayoutOptions }
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
