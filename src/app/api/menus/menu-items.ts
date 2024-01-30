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
  {
    label: 'sidebar.menu.card',
    children: [
      {
        path: '/widgets',
        label: 'sidebar.menuItem.widgets',
        icon: 'widget',
      },
      {
        path: '/metrics',
        label: 'sidebar.menuItem.metrics',
        icon: 'metric',
      },
    ],
  },
  {
    label: 'sidebar.menu.extensions',
    children: [
      {
        label: 'sidebar.menu.editor',
        collapsible: true,
        icon: 'some',
        children: [
          {
            path: '/extensions/editors/ck',
            label: 'sidebar.menuItem.ckEditor',
          },
          {
            path: '/extensions/editors/wysiwyg',
            label: 'sidebar.menuItem.wysiwygEditor',
          },
        ],
      },
    ],
  },
];

export { menus };
