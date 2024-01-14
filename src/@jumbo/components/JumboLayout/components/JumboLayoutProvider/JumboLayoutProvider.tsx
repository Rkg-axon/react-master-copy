import { LAYOUT_ACTIONS, LayoutContext, LayoutOptions } from '@jumbo/types';
import React from 'react';
import { JumboLayoutContext, defaultLayoutOptions } from './JumboLayoutContext';
import { jumboLayoutReducer } from './reducer';

function JumboLayoutProvider({ children }: { children: React.ReactNode }) {
  const [layoutOptions, setLayoutOptions] = React.useReducer(
    jumboLayoutReducer,
    defaultLayoutOptions
  );

  const setHeaderOptions = React.useCallback((options: LayoutOptions) => {
    setLayoutOptions({
      type: LAYOUT_ACTIONS.SET_HEADER_OPTIONS,
      payload: options,
    });
  }, []);

  const setSidebarOptions = React.useCallback((options: LayoutOptions) => {
    setLayoutOptions({
      type: LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS,
      payload: options,
    });
  }, []);

  const setFooterOptions = React.useCallback((options: LayoutOptions) => {
    setLayoutOptions({
      type: LAYOUT_ACTIONS.SET_FOOTER_OPTIONS,
      payload: options,
    });
  }, []);

  const setRootOptions = React.useCallback((options: LayoutOptions) => {
    setLayoutOptions({
      type: LAYOUT_ACTIONS.SET_ROOT_OPTIONS,
      payload: options,
    });
  }, []);

  const setContentOptions = React.useCallback((options: LayoutOptions) => {
    setLayoutOptions({
      type: LAYOUT_ACTIONS.SET_CONTENT_OPTIONS,
      payload: options,
    });
  }, []);

  const setOptions = React.useCallback((options: LayoutOptions) => {
    setLayoutOptions({
      type: LAYOUT_ACTIONS.SET_OPTIONS,
      payload: options,
    });
  }, []);

  const layoutContext: LayoutContext = React.useMemo(
    () => ({
      layoutOptions,
      headerOptions: layoutOptions.header,
      sidebarOptions: layoutOptions.sidebar,
      footerOptions: layoutOptions.footer,
      contentOptions: layoutOptions.content,
      rootOptions: layoutOptions.content,
      setHeaderOptions,
      setSidebarOptions,
      setFooterOptions,
      setContentOptions,
      setRootOptions,
      setOptions,
    }),
    [
      layoutOptions,
      setHeaderOptions,
      setFooterOptions,
      setSidebarOptions,
      setContentOptions,
      setRootOptions,
      setOptions,
    ]
  );

  return (
    <JumboLayoutContext.Provider value={layoutContext}>
      {children}
    </JumboLayoutContext.Provider>
  );
}

export { JumboLayoutProvider };