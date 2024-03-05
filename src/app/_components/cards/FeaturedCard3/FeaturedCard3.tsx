'use client';

import { Div } from '@jumbo/shared';
import { getBackgroundColorStyle } from '@jumbo/utilities/helpers';
import { Card, CardContent, SxProps, Theme, Typography } from '@mui/material';

type FeaturedCard3Props = {
  header?: React.ReactNode;
  avatar?: React.ReactNode;
  title?: string | React.ReactNode;
  subheader?: string | React.ReactNode;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  contentSx?: SxProps<Theme>;
  bgcolor?: string[];
  textColor?: string;
  headHeight?: number | string;
};

function FeaturedCard3({
  header,
  avatar,
  title,
  subheader,
  sx = {},
  children,
  contentSx,
  bgcolor,
  textColor,
  headHeight = 250,
}: FeaturedCard3Props) {
  const bgColorStyle = getBackgroundColorStyle(bgcolor);
  const colorStyle = textColor ? { color: textColor } : {};
  return (
    <Card>
      <Div sx={{ ...bgColorStyle, ...colorStyle, ...sx }}>
        {header}
        <CardContent
          sx={{
            textAlign: 'center',

            ...(headHeight ? { headHeight } : {}),
          }}
        >
          {avatar}
          {renderTitle(title, textColor)}
          {renderSubheader(subheader, textColor)}
        </CardContent>
        {children && (
          <CardContent
            sx={{
              textAlign: 'center',
              bgcolor: (theme) => theme.palette.action.hover,
              ...contentSx,
            }}
          >
            {children}
          </CardContent>
        )}
      </Div>
    </Card>
  );
}

function renderTitle(title?: string | React.ReactNode, textColor?: string) {
  if (!title) {
    return null;
  }

  if (typeof title === 'string') {
    return (
      <Typography variant={'h5'} {...(textColor && { color: textColor })}>
        {title}
      </Typography>
    );
  }

  return title;
}

function renderSubheader(
  subheader?: string | React.ReactNode,
  textColor?: string
) {
  if (!subheader) {
    return null;
  }

  if (typeof subheader === 'string') {
    return (
      <Typography
        variant={'h6'}
        {...(textColor ? { color: textColor } : { color: 'text.secondary' })}
        mb={2}
      >
        {subheader}
      </Typography>
    );
  }

  return subheader;
}

export { FeaturedCard3 };
