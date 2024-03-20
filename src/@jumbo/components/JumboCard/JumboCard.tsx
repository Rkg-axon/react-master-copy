import {
  getBackgroundColorStyle,
  getBackgroundImageStyle,
} from '@jumbo/utilities/helpers';
import { Card, CardContent, CardHeader, SxProps, Theme } from '@mui/material';
import React from 'react';

type JumboCardProps = {
  title?: string | React.ReactNode;
  subheader?: string | React.ReactNode;
  action?: React.ReactNode;
  bgcolor?: string[];
  bgimage?: string;
  textColor?: string;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  reverse?: boolean;
  contentWrapper?: boolean;
  contentSx?: SxProps<Theme>;
  headerSx?: SxProps<Theme>;
  headerDivider?: boolean;
};

function JumboCard({
  title,
  subheader,
  action,
  bgcolor,
  bgimage,
  textColor,
  sx = {},
  children,
  reverse = false,
  contentWrapper = false,
  contentSx = {},
  headerSx = {},
}: JumboCardProps) {
  const backgroundColorStyle = getBackgroundColorStyle(bgcolor);
  const colorStyle = textColor ? { color: textColor } : {};
  const backgroundImageStyle = getBackgroundImageStyle(bgimage);
  return (
    <Card
      sx={{
        position: 'relative',
        ...backgroundColorStyle,
        ...backgroundImageStyle,
        ...colorStyle,
        ...sx,
      }}
    >
      {reverse &&
        (contentWrapper ? (
          <CardContent sx={contentSx}>{children}</CardContent>
        ) : (
          children
        ))}

      {(title || subheader || action) && (
        <CardHeader
          title={title}
          subheader={subheader}
          action={action}
          sx={headerSx}
        />
      )}

      {!reverse &&
        (contentWrapper ? (
          <CardContent sx={contentSx}>{children}</CardContent>
        ) : (
          children
        ))}
    </Card>
  );
}

export { JumboCard };
