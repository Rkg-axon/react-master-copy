import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
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
];

export { APP_ICONS, type Icon };
