import { JumboHeaderProps } from '@jumbo/types';
import { CardHeader, Typography } from '@mui/material';
import React from 'react';

const renderTitle = (title: string | React.ReactNode) => {
  if (typeof title === 'string') {
    return (
      <Typography component={'h4'} color={'#fff'}>
        {title}
      </Typography>
    );
  }
  return title;
};
const JumboHeader = ({
  action,
  title,
  avatar,
  reverse,
  subheader,
  headerSx,
}: JumboHeaderProps) => {
  if (!reverse) {
    return (
      <CardHeader
        title={renderTitle(title)}
        subheader={subheader}
        action={action}
        avatar={avatar}
        sx={{
          zIndex: 2,
          position: 'relative',
          ...headerSx,
        }}
      />
    );
  } else {
    return (
      <CardHeader
        title={title}
        subheader={subheader}
        action={action}
        avatar={avatar}
        sx={{
          zIndex: 2,
          position: 'relative',
          borderBottomColor: (theme) => theme.palette.divider,
          ...headerSx,
        }}
      />
    );
  }
};

export { JumboHeader };
