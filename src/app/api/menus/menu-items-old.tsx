import { MenuItems } from '@jumbo/types';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import GridViewIcon from '@mui/icons-material/GridView';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ListIcon from '@mui/icons-material/List';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LockResetIcon from '@mui/icons-material/LockReset';
import LoginIcon from '@mui/icons-material/Login';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const menus: MenuItems = [
  {
    label: 'sidebar.menu.home',
    children: [
      {
        path: '/dashboards/misc',
        label: 'sidebar.menuItem.misc',
        icon: <GraphicEqIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/dashboards/crypto',
        label: 'sidebar.menuItem.crypto',
        icon: <CurrencyExchangeOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/dashboards/listing',
        label: 'sidebar.menuItem.listing',
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/dashboards/crm',
        label: 'sidebar.menuItem.crm',
        icon: <SupportAgentOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/dashboards/intranet',
        label: 'sidebar.menuItem.intranet',
        icon: <PieChartOutlineOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/dashboards/ecommerce',
        label: 'sidebar.menuItem.eCommerce',
        icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/dashboards/news',
        label: 'sidebar.menuItem.news',
        icon: <NewspaperIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },

  {
    label: 'sidebar.menu.apps',
    children: [
      {
        path: '/app/chats',
        label: 'sidebar.menuItem.chat',
        icon: <ChatOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/app/contacts/all',
        label: 'sidebar.menuItem.contacts',
        icon: <ContactsOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/app/mails/inbox',
        label: 'sidebar.menuItem.mail',
        icon: <EmailOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },

  {
    label: 'sidebar.menu.cards',
    children: [
      {
        path: '/widgets',
        label: 'sidebar.menuItem.widgets',
        icon: <WidgetsOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/metrics',
        label: 'sidebar.menuItem.metrics',
        icon: <LeaderboardOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },

  {
    label: 'sidebar.menu.components',
    children: [
      {
        label: 'sidebar.menuItem.mui',
        icon: <SourceOutlinedIcon sx={{ fontSize: 20 }} />,
        children: [
          {
            path: '/mui/accordions',
            label: 'sidebar.menuItem.accordions',
          },
          {
            path: '/mui/alerts',
            label: 'sidebar.menuItem.alerts',
          },
          {
            path: '/mui/autocomplete',
            label: 'sidebar.menuItem.autoComplete',
          },
          {
            path: '/mui/avatars',
            label: 'sidebar.menuItem.avatars',
          },
          {
            path: '/mui/backdrop',
            label: 'sidebar.menuItem.backdrops',
          },
          {
            path: '/mui/badges',
            label: 'sidebar.menuItem.badges',
          },
          {
            path: '/mui/bottom-navigation',
            label: 'sidebar.menuItem.bottomNavigations',
          },
          {
            path: '/mui/breadcrumbs',
            label: 'sidebar.menuItem.breadcrumbs',
          },
          {
            path: '/mui/button-group',
            label: 'sidebar.menuItem.buttonGroup',
          },
          {
            path: '/mui/buttons',
            label: 'sidebar.menuItem.buttons',
          },
          {
            path: '/mui/checkbox',
            label: 'sidebar.menuItem.checkboxes',
          },
          {
            path: '/mui/chips',
            label: 'sidebar.menuItem.chip',
          },
          {
            path: '/mui/click-away-listener',
            label: 'sidebar.menuItem.clickAwayListeners',
          },
          {
            path: '/mui/container',
            label: 'sidebar.menuItem.container',
          },
          {
            path: '/mui/dialogs',
            label: 'sidebar.menuItem.dialogs',
          },
          {
            path: '/mui/dividers',
            label: 'sidebar.menuItem.dividers',
          },
          {
            path: '/mui/grid',
            label: 'sidebar.menuItem.grids',
          },
          {
            path: '/mui/images-list',
            label: 'sidebar.menuItem.imageList',
          },
          {
            path: '/mui/links',
            label: 'sidebar.menuItem.links',
          },
          {
            path: '/mui/lists',
            label: 'sidebar.menuItem.lists',
          },
          {
            path: '/mui/masonry',
            label: 'sidebar.menuItem.masonry',
          },
          {
            path: '/mui/menus',
            label: 'sidebar.menuItem.menus',
          },
          {
            path: '/mui/modal',
            label: 'sidebar.menuItem.modal',
          },
          {
            path: '/mui/paginations',
            label: 'sidebar.menuItem.pagination',
          },
          {
            path: '/mui/papers',
            label: 'sidebar.menuItem.paper',
          },
          {
            path: '/mui/pickers',
            label: 'sidebar.menuItem.pickers',
          },
          {
            path: '/mui/popovers',
            label: 'sidebar.menuItem.popovers',
          },
          {
            path: '/mui/poppers',
            label: 'sidebar.menuItem.popper',
          },
          {
            path: '/mui/portals',
            label: 'sidebar.menuItem.portal',
          },
          {
            path: '/mui/progress',
            label: 'sidebar.menuItem.progress',
          },
          {
            path: '/mui/radio-buttons',
            label: 'sidebar.menuItem.radioButtons',
          },
          {
            path: '/mui/rating',
            label: 'sidebar.menuItem.rating',
          },
          {
            path: '/mui/selects',
            label: 'sidebar.menuItem.selects',
          },
          {
            path: '/mui/skeletons',
            label: 'sidebar.menuItem.skeleton',
          },
          {
            path: '/mui/slider',
            label: 'sidebar.menuItem.sliders',
          },
          {
            path: '/mui/snackbars',
            label: 'sidebar.menuItem.snackbars',
          },
          {
            path: '/mui/speed-dial',
            label: 'sidebar.menuItem.speedDial',
          },
          {
            path: '/mui/stacks',
            label: 'sidebar.menuItem.stack',
          },
          {
            path: '/mui/steppers',
            label: 'sidebar.menuItem.steppers',
          },
          {
            path: '/mui/switches',
            label: 'sidebar.menuItem.switches',
          },
          {
            path: '/mui/tabs',
            label: 'sidebar.menuItem.tabs',
          },
          {
            path: '/mui/text-fields',
            label: 'sidebar.menuItem.textFields',
          },
          {
            path: '/mui/textarea-autosize',
            label: 'sidebar.menuItem.textareaAutosize',
          },
          {
            path: '/mui/timeline',
            label: 'sidebar.menuItem.timeline',
          },
          {
            path: '/mui/toggle-buttons',
            label: 'sidebar.menuItem.toggleButtons',
          },
          {
            path: '/mui/tooltips',
            label: 'sidebar.menuItem.tooltips',
          },
          {
            path: '/mui/transfers-list',
            label: 'sidebar.menuItem.transferList',
          },
          {
            path: '/mui/transitions',
            label: 'sidebar.menuItem.transitions',
          },
          {
            path: '/mui/tree-view',
            label: 'sidebar.menuItem.treeViews',
          },
          {
            path: '/mui/typography',
            label: 'sidebar.menuItem.typography',
          },
        ],
      },
    ],
  },

  {
    label: 'sidebar.menu.extensions',
    children: [
      {
        label: 'sidebar.menu.editor',
        collapsible: true,
        icon: <ModeEditOutlinedIcon sx={{ fontSize: 20 }} />,
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
        icon: <DragIndicatorIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/extensions/Dropzone',
        label: 'sidebar.menuItem.dropzone',
        icon: <BackupOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/extensions/sweet-alert',
        label: 'sidebar.menuItem.sweetAlerts',
        icon: <WarningAmberIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },

  {
    label: 'sidebar.menu.modules',
    children: [
      {
        label: 'sidebar.menu.calendar',
        collapsible: true,
        icon: <EventNoteIcon sx={{ fontSize: 20 }} />,
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
        icon: <InsertChartOutlinedIcon sx={{ fontSize: 20 }} />,
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
        icon: <MyLocationIcon sx={{ fontSize: 20 }} />,
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
        icon: <LoginIcon sx={{ fontSize: 20 }} />,
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
        icon: <PersonAddAltIcon sx={{ fontSize: 20 }} />,
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
        icon: <PasswordOutlinedIcon sx={{ fontSize: 20 }} />,
        target: '_blank',
      },
      {
        path: '/auth-pages/reset-password',
        label: 'sidebar.menuItem.resetPassword',
        icon: <LockResetIcon sx={{ fontSize: 20 }} />,
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
        icon: <InfoOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/extra-pages/contact-us',
        label: 'sidebar.menuItem.contactUs',
        icon: <ContactPageOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/extra-pages/call-outs',
        label: 'sidebar.menuItem.callOuts',
        icon: <CallEndIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/extra-pages/pricing-plan',
        label: 'sidebar.menuItem.pricePlan',
        icon: <CreditCardIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/extra-pages/404',
        label: 'sidebar.menuItem.error400',
        icon: <ErrorOutlineIcon sx={{ fontSize: 20 }} />,
        target: '_blank',
      },
      {
        path: '/extra-pages/500',
        label: 'sidebar.menuItem.error500',
        icon: <RunningWithErrorsOutlinedIcon sx={{ fontSize: 20 }} />,
        target: '_blank',
      },
      {
        path: '/extra-pages/lock-screen',
        label: 'sidebar.menuItem.lockScreen',
        icon: <ScreenLockRotationIcon sx={{ fontSize: 20 }} />,
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
        icon: <AccountBoxOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/user/social-wall',
        label: 'sidebar.menuItem.socialWall',
        icon: <StreamOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  {
    label: 'sidebar.menu.listView',
    children: [
      {
        path: '/list-views/projects',
        label: 'sidebar.menuItem.projects',
        icon: <ViewListOutlinedIcon sx={{ fontSize: 20 }} />,
      },

      {
        path: '/list-views/users',
        label: 'sidebar.menuItem.users',
        icon: <ListIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  {
    label: 'sidebar.menu.gridView',
    children: [
      {
        path: '/grid-views/projects',
        label: 'sidebar.menuItem.projects',
        icon: <GridViewIcon sx={{ fontSize: 20 }} />,
      },
      {
        path: '/grid-views/users',
        label: 'sidebar.menuItem.users',
        icon: <Grid3x3OutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
];

export { menus };
