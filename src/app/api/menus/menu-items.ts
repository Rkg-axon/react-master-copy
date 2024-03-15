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
      {
        path: '/dashboards/listing',
        label: 'sidebar.menuItem.listing',
        icon: 'listing',
      },
      {
        path: '/dashboards/crm',
        label: 'sidebar.menuItem.crm',
        icon: 'crm',
      },
      {
        path: '/dashboards/intranet',
        label: 'sidebar.menuItem.intranet',
        icon: 'intranet',
      },
      {
        path: '/dashboards/ecommerce',
        label: 'sidebar.menuItem.ecommerce',
        icon: 'ecommerce',
      },
      {
        path: '/dashboards/news',
        label: 'sidebar.menuItem.news',
        icon: 'news',
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
        icon: 'editor',
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
      {
        path: '/extensions/DnD',
        label: 'sidebar.menuItem.dnd',
        icon: 'dnd',
      },
      {
        path: '/extensions/Dropzone',
        label: 'sidebar.menuItem.dropzone',
        icon: 'dropzone',
      },
      {
        path: '/extensions/sweet-alert',
        label: 'sidebar.menuItem.sweet-alert',
        icon: 'sweet-alert',
      },
    ],
  },
  {
    label: 'sidebar.menu.modules',
    children: [
      {
        label: 'sidebar.menu.calendar',
        collapsible: true,
        icon: 'calendar',
        children: [
          {
            path: '/modules/calendars/basic',
            label: 'sidebar.menuItem.basic',
          },
          {
            path: '/modules/calendars/culture',
            label: 'sidebar.menuItem.cultures',
          },
          {
            path: '/modules/calendars/popup',
            label: 'sidebar.menuItem.popup',
          },
          {
            path: '/modules/calendars/rendering',
            label: 'sidebar.menuItem.rendering',
          },
          {
            path: '/modules/calendars/selectable',
            label: 'sidebar.menuItem.selectable',
          },
          {
            path: '/modules/calendars/timeslot',
            label: 'sidebar.menuItem.timeSlots',
          },
        ],
      },
      {
        label: 'sidebar.menu.charts',
        collapsible: true,
        icon: 'chart',
        children: [
          {
            path: '/modules/charts/line',
            label: 'sidebar.menuItem.line',
          },
          {
            path: '/modules/charts/bar',
            label: 'sidebar.menuItem.bar',
          },
          {
            path: '/modules/charts/area',
            label: 'sidebar.menuItem.area',
          },
          {
            path: '/modules/charts/composed',
            label: 'sidebar.menuItem.composed',
          },
          {
            path: '/modules/charts/pie',
            label: 'sidebar.menuItem.pie',
          },
          {
            path: '/modules/charts/scatter',
            label: 'sidebar.menuItem.scatter',
          },
          {
            path: '/modules/charts/radial',
            label: 'sidebar.menuItem.radial',
          },
          {
            path: '/modules/charts/radar',
            label: 'sidebar.menuItem.radar',
          },
          {
            path: '/modules/charts/treemap',
            label: 'sidebar.menuItem.treeMap',
          },
        ],
      },
      {
        label: 'sidebar.menu.maps',
        collapsible: true,
        icon: 'map',
        children: [
          {
            path: '/modules/maps/simple',
            label: 'sidebar.menuItem.simpleMap',
          },
          {
            path: '/modules/maps/styled',
            label: 'sidebar.menuItem.styledMap',
          },
          {
            path: '/modules/maps/geo-location',
            label: 'sidebar.menuItem.geoLocation',
          },
          {
            path: '/modules/maps/directions',
            label: 'sidebar.menuItem.directional',
          },
          {
            path: '/modules/maps/overlay',
            label: 'sidebar.menuItem.overlay',
          },
          {
            path: '/modules/maps/kml',
            label: 'sidebar.menuItem.kmLayer',
          },
          {
            path: '/modules/maps/popup-info',
            label: 'sidebar.menuItem.popupInfo',
          },
          {
            path: '/modules/maps/street-view',
            label: 'sidebar.menuItem.streetView',
          },
          {
            path: '/modules/maps/drawing',
            label: 'sidebar.menuItem.drawing',
          },
          {
            path: '/modules/maps/clustering',
            label: 'sidebar.menuItem.clustering',
          },
        ],
      },
    ],
  },
  {
    label: 'sidebar.menu.authPages',
    children: [
      {
        label: 'sidebar.menu.login',
        collapsible: true,
        icon: 'login',
        children: [
          {
            path: '/auth-pages/login-1',
            label: 'sidebar.menuItem.login1',
            target: '_blank',
          },
          {
            path: '/auth-pages/login-2',
            label: 'sidebar.menuItem.login2',
            target: '_blank',
          },
        ],
      },
      {
        label: 'sidebar.menu.signup',
        collapsible: true,
        icon: 'signup',
        children: [
          {
            path: '/auth-pages/signup-1',
            label: 'sidebar.menuItem.signup1',
            target: '_blank',
          },
          {
            path: '/auth-pages/signup-2',
            label: 'sidebar.menuItem.signup2',
            target: '_blank',
          },
        ],
      },
      {
        path: '/auth-pages/forgot-password',
        label: 'sidebar.menuItem.forgetPassword',
        icon: 'forgot-password',
        target: '_blank',
      },
      {
        path: '/auth-pages/reset-password',
        label: 'sidebar.menuItem.resetPassword',
        icon: 'reset-password',
        target: '_blank',
      },
    ],
  },
  {
    label: 'sidebar.menu.extraPages',
    children: [
      {
        path: '/extra-pages/about-us',
        label: 'sidebar.menuItem.aboutUs',
        icon: 'about-us',
      },
      {
        path: '/extra-pages/contact-us',
        label: 'sidebar.menuItem.contactUs',
        icon: 'contact-us',
      },
      {
        path: '/extra-pages/call-outs',
        label: 'sidebar.menuItem.callOuts',
        icon: 'call-outs',
      },
      {
        path: '/extra-pages/pricing-plan',
        label: 'sidebar.menuItem.pricePlan',
        icon: 'pricing-plan',
      },
      {
        path: '/extra-pages/404',
        label: 'sidebar.menuItem.error400',
        icon: '404',
        target: '_blank',
      },
      {
        path: '/extra-pages/500',
        label: 'sidebar.menuItem.error500',
        icon: '500',
        target: '_blank',
      },
      {
        path: '/extra-pages/lock-screen',
        label: 'sidebar.menuItem.lockScreen',
        icon: 'lock-screen',
        target: '_blank',
      },
    ],
  },
  {
    label: 'sidebar.menu.user',
    children: [
      {
        path: '/user/profile',
        label: 'sidebar.menuItem.profile',
        icon: 'profile',
      },
      {
        path: '/user/social-wall',
        label: 'sidebar.menuItem.socialWall',
        icon: 'social-wall',
      },
    ],
  },
  {
    label: 'sidebar.menu.listView',
    children: [
      {
        path: '/list-views/projects',
        label: 'sidebar.menuItem.projects',
        icon: 'projects-list',
      },

      {
        path: '/list-views/users',
        label: 'sidebar.menuItem.users',
        icon: 'users-list',
      },
    ],
  },
  {
    label: 'sidebar.menu.gridView',
    children: [
      {
        path: '/grid-views/projects',
        label: 'sidebar.menuItem.projects',
        icon: 'projects-grid',
      },
      {
        path: '/grid-views/users',
        label: 'sidebar.menuItem.users',
        icon: 'users-grid',
      },
    ],
  },
];

export { menus };
