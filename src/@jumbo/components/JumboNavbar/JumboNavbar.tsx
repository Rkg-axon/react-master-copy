'use client';
import { JumboThemeOptions, MenuItems } from '@jumbo/types';
import { List } from '@mui/material';

import { useJumboTheme } from '../JumboTheme/hooks';
import { JumboNavIdentifier } from './components';

type JumboNavbarProps = {
  items: MenuItems;
  groupBehaviour: 'collapsible' | 'popover';
  mini?: boolean;
  open?: boolean;
  theme?: JumboThemeOptions;
};

function JumboNavbar(
  props: JumboNavbarProps = {
    items: [],
    groupBehaviour: 'collapsible',
    mini: false,
    open: true,
  }
) {
  const miniAndClosed: boolean = !!props.mini && !props.open;
  const { theme: jumboTheme } = useJumboTheme();
  const activeTheme = props.theme || jumboTheme;

  return (
    <List
      disablePadding
      sx={{
        mr: miniAndClosed ? 0 : 2,
        pb: 2,
      }}
    >
      {props.items.map((item, index) => (
        <JumboNavIdentifier
          item={item}
          miniAndClosed={miniAndClosed}
          key={index}
          theme={activeTheme}
        />
      ))}
    </List>
  );
}

export { JumboNavbar };
