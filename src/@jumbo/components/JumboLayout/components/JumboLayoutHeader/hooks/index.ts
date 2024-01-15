import { useJumboLayout } from '@jumbo/components/JumboLayout';
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS } from '@jumbo/types';
import React from 'react';

function useHeaderMargin() {
  const { headerOptions, sidebarOptions } = useJumboLayout();
  return React.useMemo(() => {
    if (!headerOptions.fixed) {
      return 0;
    }

    if (sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY) {
      return 0;
    } else {
      if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI) {
        return sidebarOptions?.minWidth;
      } else {
        if (sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT) {
          return sidebarOptions?.open ? sidebarOptions?.width : 0;
        }
        return 0;
      }
    }
  }, [
    sidebarOptions?.open,
    sidebarOptions?.width,
    sidebarOptions?.minWidth,
    sidebarOptions?.view,
    sidebarOptions?.style,
    sidebarOptions?.variant,
    headerOptions?.fixed,
  ]);
}

export { useHeaderMargin };
