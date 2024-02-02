import { SxProps, Theme } from '@mui/material';
import React from 'react';
import { BackdropProps, BgStyleProps } from '.';
type JumboFeaturedProps = BgStyleProps &
  BackdropProps & {
    tick?: React.ReactNode;
    tickSx?: SxProps<Theme>;
    direction: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    spacing?: number | string | number[] | string[];
    showTick?: boolean;
    imgSrc?: string;
    imgAlt?: string;
    imgSx?: SxProps<Theme>;
    imgFit?: boolean;
    sx?: SxProps<Theme>;
    stackSx?: SxProps<Theme>;
    children?: React.ReactNode;
    imgHeight?: number | undefined;
    imgWidth?: number | undefined;
  };

export { type JumboFeaturedProps };
