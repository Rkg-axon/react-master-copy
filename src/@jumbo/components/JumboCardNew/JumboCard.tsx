import { getBackgroundColorStyle } from '@app/_utilities/helpers';
import {
  Card,
  CardContent,
  CardHeader,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import React from 'react';

type StatsCard1Props = {
  title?: string | React.ReactNode;
  subheader?: string | React.ReactNode;
  action?: React.ReactNode;
  bgcolor?: string[];
  textColor?: string;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  reverse?: boolean;
  contentSx?: SxProps<Theme>;
};

//TODO: make this a common card for the quick implementation with following features:
//Directly pass title, subheader and action
//handle bgcolor, textColor and background image
//handle reverse action
//handle spacing and padding

function JumboCard({
  title,
  subheader,
  action,
  bgcolor,
  textColor,
  sx = {},
  children,
  reverse = false,
  contentSx = {},
}: StatsCard1Props) {
  const bgstyle = getBackgroundColorStyle(bgcolor);
  const colorStyle = textColor ? { color: textColor } : {};
  return (
    <Card sx={{ ...bgstyle, ...colorStyle, ...sx }}>
      {reverse && <CardContent sx={contentSx}>{children}</CardContent>}
      <CardHeader
        title={renderTitle(title, textColor)}
        subheader={renderSubheader(subheader, textColor)}
        action={action}
      />
      {!reverse && <CardContent sx={contentSx}>{children}</CardContent>}
    </Card>
  );
}

function renderTitle(title?: string | React.ReactNode, textColor?: string) {
  if (!title) return null;

  if (typeof title === 'string')
    return (
      <Typography
        fontWeight={'500'}
        variant={'h3'}
        {...(textColor && { color: textColor })}
      >
        {title}
      </Typography>
    );

  return title;
}

function renderSubheader(
  subheader?: string | React.ReactNode,
  textColor?: string
) {
  if (!subheader) return null;

  if (typeof subheader === 'string')
    return (
      <Typography
        variant={'h6'}
        {...(textColor && { color: textColor })}
        mb={0}
      >
        {subheader}
      </Typography>
    );

  return subheader;
}

export { JumboCard };
