import {
  getBackgroundColorStyle,
  getBackgroundImageStyle,
} from '@jumbo/utilities/helpers';
import {
  Card,
  CardContent,
  CardHeader,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
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
  headerDivider = false,
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
          <CardContent sx={{ px: 0, ...contentSx }}>{children}</CardContent>
        ) : (
          children
        ))}

      {(title || subheader || action) && (
        <CardHeader
          title={renderTitle(title, textColor)}
          subheader={renderSubheader(subheader, textColor)}
          action={action}
          {...(headerDivider && {
            borderBottom: 1,
            borderBottomColor: 'divider',
          })}
          sx={{ ...headerSx }}
        />
      )}

      {!reverse &&
        (contentWrapper ? (
          <CardContent sx={{ pt: 0, px: 0, ...contentSx }}>
            {children}
          </CardContent>
        ) : (
          children
        ))}
    </Card>
  );
}

function renderTitle(title?: string | React.ReactNode, textColor?: string) {
  if (!title) return null;

  if (typeof title === 'string')
    return (
      <Typography
        fontWeight={'400'}
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
