import { SxProps, Theme } from '@mui/material';

type JumboHeaderProps = {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  headerSx?: SxProps<Theme>;
  reverse?: boolean;
};

type JumboCardProps = JumboHeaderProps & {
  bgColor?: string | string[];
  bgImage?: string;
  bgGradientDir?: string;
  noWrapper?: boolean;
  wrapperSx?: SxProps<Theme>;
  backdrop?: boolean;
  backdropSx?: SxProps<Theme>;
  backdropColor?: string;
  backdropOpacity?: string | number;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
};

export { type JumboCardProps, type JumboHeaderProps };
