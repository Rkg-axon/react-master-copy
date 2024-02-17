import { SxProps, Theme } from '@mui/material';
type JumboBackdropProps = {
  color?: string;
  opacity: string | number | undefined;
  open: boolean | undefined;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
};

export { type JumboBackdropProps };