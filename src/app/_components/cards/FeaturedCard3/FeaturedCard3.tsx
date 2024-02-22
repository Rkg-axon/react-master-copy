'use client';
import { Div } from '@jumbo/shared';
import { Card, CardContent, SxProps, Theme, Typography } from '@mui/material';

type FeaturedCard3Props = {
  header?: React.ReactNode;
  avatar?: React.ReactNode;
  title?: string | React.ReactNode;
  subheader?: string | React.ReactNode;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  contentSx?: SxProps<Theme>;
};

function FeaturedCard3({
  header,
  avatar,
  title,
  subheader,
  sx = {},
  children,
  contentSx,
}: FeaturedCard3Props) {
  return (
    <Card>
      <Div
        sx={{
          ...sx,
        }}
      >
        {header}
        <CardContent sx={{ textAlign: 'center' }}>
          {avatar}
          {renderTitle(title)}
          {renderSubheader(subheader)}
        </CardContent>
        <CardContent
          sx={{
            textAlign: 'center',
            bgcolor: (theme) => theme.palette.action.hover,
            ...contentSx,
          }}
        >
          {children}
        </CardContent>
      </Div>
    </Card>
  );
}

function renderTitle(title?: string | React.ReactNode) {
  if (!title) {
    return null;
  }

  if (typeof title === 'string') {
    return <Typography variant={'h5'}>{title}</Typography>;
  }

  return title;
}

function renderSubheader(subheader?: string | React.ReactNode) {
  if (!subheader) {
    return null;
  }

  if (typeof subheader === 'string') {
    return (
      <Typography variant={'h6'} color='text.secondary' mb={2}>
        {subheader}
      </Typography>
    );
  }

  return subheader;
}

export { FeaturedCard3 };
