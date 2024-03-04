import { FeaturedCard3 } from '@app/_components/cards/FeaturedCard3';
import { ASSET_AVATARS, ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { JumboBackdrop } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { Avatar, CardContent, CardHeader, Typography } from '@mui/material';
import { ProfileStats } from './components';
import { data } from './data';

function UserProfileCard1() {
  return (
    <FeaturedCard3
      header={
        <CardHeader
          action={
            <JumboDdMenu
              menuItems={[{ title: 'Profile' }, { title: 'Friends' }]}
            />
          }
        />
      }
      avatar={
        <Avatar
          sx={{ width: 90, height: 90, boxShadow: 2, m: '0 auto 20px' }}
          src={`${ASSET_AVATARS}/avatar8.jpg`}
        />
      }
      title={'Gramy Sobbers'}
      subheader={`Graphic Designer`}
      contentWrapper={false}
      backdrop={
        <JumboBackdrop
          color={'#000000'}
          open={true}
          opacity={0.9}
          sx={{
            background: `url(${ASSET_IMAGES}/event2.jpg) no-repeat center`,
            backgroundSize: 'cover',
            zIndex: -999,
          }}
        />
      }
      textColor='#ffffff'
    >
      <ProfileStats data={data} />
      <CardContent>
        <Typography variant={'h4'}>About Chelsea</Typography>
        <Typography>
          Chelsea is an Australian actress. She was born on August 11, 1983. The
          actress gained super stardom with the role of Amily.
        </Typography>
      </CardContent>
    </FeaturedCard3>
  );
}

export { UserProfileCard1 };
