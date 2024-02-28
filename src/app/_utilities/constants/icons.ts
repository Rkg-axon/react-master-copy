import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { SvgIconTypeMap, SxProps, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Icon = {
  name: string;
  Component: OverridableComponent<SvgIconTypeMap>;
  props: {
    sx?: SxProps<Theme>;
  };
};

const APP_ICONS: Icon[] = [
  { name: 'misc', Component: GraphicEqIcon, props: { sx: { fontSize: 20 } } },
  {
    name: 'crypto',
    Component: CurrencyExchangeOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'widget',
    Component: WidgetsOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'metric',
    Component: LeaderboardOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'facebook-outlined',
    Component: FacebookOutlined,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'twitter',
    Component: Twitter,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'instagram',
    Component: Instagram,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'google',
    Component: Instagram,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'youtube',
    Component: YouTube,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'linkedin',
    Component: LinkedIn,
    props: { sx: { fontSize: 20 } },
  },
];

export { APP_ICONS, type Icon };
