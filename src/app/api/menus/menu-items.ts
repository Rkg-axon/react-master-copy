import { MenuItems } from '@jumbo/types';

const menus: MenuItems = [
  {
    label: 'sidebar.menu.home',
    children: [
      {
        path: '/dashboards/misc',
        label: 'sidebar.menuItem.misc',
        icon: 'misc',
      },
      {
        path: '/dashboards/crypto',
        label: 'sidebar.menuItem.crypto',
        icon: 'crypto',
      },
    ],
  },
];

export { menus };
