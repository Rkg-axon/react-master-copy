'use client';
import { MenuItems } from '@jumbo/types';
import { List } from '@mui/material';

import { useSidebarState } from '../JumboLayout/hooks';
import { JumboNavIdentifier } from './components';

type JumboNavbarProps = {
  items: MenuItems;
  groupBehaviour: 'collapsible' | 'popover';
};

function JumboNavbar(
  props: JumboNavbarProps = { items: [], groupBehaviour: 'collapsible' }
) {
  const { isMiniAndClosed } = useSidebarState();
  const miniAndClosed = isMiniAndClosed();

  return (
    <List
      disablePadding
      sx={{
        mr: miniAndClosed ? 0 : 2,
        pb: 2,
      }}
    >
      {props.items.map((item, index) => (
        <JumboNavIdentifier item={item} key={index} />
      ))}
    </List>
  );
}

export { JumboNavbar };
