'use client';
import { JumboCardProps } from '@jumbo/types';
import {
  getBgColorStyle,
  getBgImageStyle,
} from '@jumbo/utilities/styleHelpers';
import { Card, CardContent } from '@mui/material';
import React from 'react';
import { JumboBackdrop } from '../JumboBackdrop';
import { JumboHeader } from './components/JumboHeader';

function JumboCard({
  title,
  subheader,
  avatar,
  action,
  bgColor,
  bgImage,
  bgGradientDir,
  headerSx,
  noWrapper,
  wrapperSx,
  backdrop,
  backdropColor,
  backdropOpacity,
  reverse,
  sx,
  children,
}: JumboCardProps) {
  const [bgStyle] = React.useState(
    bgImage
      ? getBgImageStyle(bgImage)
      : bgColor
        ? getBgColorStyle({ colors: bgColor, gradientDir: bgGradientDir })
        : {}
  );

  return (
    <Card sx={{ ...bgStyle, position: 'relative', ...sx }}>
      <JumboBackdrop
        color={backdropColor}
        opacity={backdropOpacity}
        open={backdrop}
      />
      {(action || title || avatar) && !reverse && (
        <JumboHeader
          action={action}
          title={title}
          avatar={avatar}
          subheader={subheader}
          headerSx={headerSx}
        />
      )}
      {noWrapper ? (
        children
      ) : (
        <CardContent sx={{ ...wrapperSx, zIndex: 2, position: 'relative' }}>
          {children}
        </CardContent>
      )}
      {(action || title || avatar) && reverse && (
        <JumboHeader
          action={action}
          title={title}
          avatar={avatar}
          reverse={reverse}
          subheader={subheader}
          headerSx={headerSx}
        />
      )}
    </Card>
  );
}

export { JumboCard };
