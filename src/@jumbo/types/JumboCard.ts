import { SxProps, Theme } from '@mui/material';

type JumboBgStyleProps = {
  bgColor?: string | string[];
  bgImage?: string;
  bgGradientDir?: string;
};

type JumboBackdropProps = {
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

type JumboContentProps = JumboBgStyleProps &
  JumboBackdropProps & {
    sx?: SxProps<Theme>;
    children?: React.ReactNode;
  };

type JumboCardProps = JumboHeaderProps &
  JumboBgStyleProps &
  JumboBackdropProps & {
    noWrapper?: boolean;
    wrapperSx?: SxProps<Theme>;
    sx?: SxProps<Theme>;
    children?: React.ReactNode;
  };

export {
  type JumboBackdropProps,
  type JumboBgStyleProps,
  type JumboCardProps,
  type JumboContentProps,
  type JumboHeaderProps,
};
