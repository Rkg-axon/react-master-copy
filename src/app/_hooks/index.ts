import { useSidebarState } from '@jumbo/components/JumboLayout/hooks';
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from '@jumbo/utilities/constants';

function useSidebarCollapsible(): boolean {
  const { isSidebarOpen, isSidebarStyle, isSidebarVariant } = useSidebarState();

  return (
    isSidebarStyle(SIDEBAR_STYLES.CLIPPED_UNDER_HEADER) ||
    isSidebarVariant(SIDEBAR_VARIANTS.TEMPORARY) ||
    (isSidebarVariant(SIDEBAR_VARIANTS.PERSISTENT) && !isSidebarOpen())
  );
}

export { useSidebarCollapsible };
