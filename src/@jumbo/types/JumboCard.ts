import { SxProps, Theme } from '@mui/material';

type BgStyleProps = {
  bgColor?: string | string[];
  bgImage?: string;
  bgGradientDir?: string;
};
type BackdropProps = {
  backdrop?: boolean;
  backdropColor?: string;
  backdropOpacity?: string | number;
};

type JumboHeaderProps = {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  headerSx?: SxProps<Theme>;
  reverse?: boolean;
};

type JumboContentProps = BgStyleProps &
  BackdropProps & {
    sx?: SxProps<Theme>;
    children?: React.ReactNode;
  };

type JumboCardProps = JumboHeaderProps &
  BgStyleProps &
  BackdropProps & {
    noWrapper?: boolean;
    wrapperSx?: SxProps<Theme>;
    sx?: SxProps<Theme>;
    children?: React.ReactNode;
  };

export {
  type BackdropProps,
  type BgStyleProps,
  type JumboCardProps,
  type JumboHeaderProps,
  type JumboContentProps
};
