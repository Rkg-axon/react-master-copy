import { Card, CardHeader, Typography } from '@mui/material';
import React from 'react';

type FeaturedCard2Props = {
  title: React.ReactNode;
  avatar: React.ReactNode;
  subheader?: React.ReactNode;
  bgcolor?: string[];
};

function FeaturedCard2({
  title,
  subheader,
  avatar,
  bgcolor,
}: FeaturedCard2Props) {
  return (
    <Card
      sx={{
        height: 116,
        '& .MuiCardHeader-root': {
          height: '100%',
        },
        '& .MuiCardHeader-avatar': {
          marginRight: '50px',
          marginLeft: '10px',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-35px',
            left: '-55px',
            width: 185,
            height: 185,
            backgroundImage: `linear-gradient(${bgcolor?.toString()})`,
            borderRadius: '50%',
          },
        },
      }}
    >
      <CardHeader
        avatar={avatar}
        title={
          typeof title === 'string' ? (
            title
          ) : (
            <Typography variant={'h4'} mb={0}>
              {title}
            </Typography>
          )
        }
        subheader={subheader}
      />
    </Card>
  );
}

export { FeaturedCard2 };
