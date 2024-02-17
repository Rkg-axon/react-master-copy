'use client';
import { getAssetPath } from '@app/utilities/appHelpers';
import { ASSET_AVATARS } from '@app/utilities/constants/paths';
import { JumboCard } from '@jumbo/components';
import { JumboContent } from '@jumbo/components/JumboCard/components/JumboCardContent';
import { Avatar, Typography } from '@mui/material';

const UserProfileCard1 = () => {
  return (
    <JumboCard noWrapper action={'Smile'} headerSx={{ backgroundColor: 'red' }}>
      <JumboContent
        sx={{
          p: (theme) => theme.spacing(0, 3, 3),
          textAlign: 'center',
        }}
      >
        <Avatar
          sx={{ width: 90, height: 90, boxShadow: 2, m: '0 auto 20px' }}
          src={getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`, '90x90')}
        />
        <Typography variant={'h5'}>Garry Sobers</Typography>
        <Typography variant={'h6'} color='text.secondary' mb={2}>
          Graphic Designer
        </Typography>
      </JumboContent>
      <JumboContent
        sx={{
          p: 3,
          textAlign: 'center',
          backgroundColor: (theme) => theme.palette.action.hover,
        }}
      >
        <Typography variant={'body1'}>
          Cenas in erat accusman, hendrerit vel, pulvinar adio. Quisque eu conva
          tend
        </Typography>
      </JumboContent>
    </JumboCard>
  );
};

export { UserProfileCard1 };
