import { JumboCardNew } from '@jumbo/components';
import { JumboOverlay } from '@jumbo/components/JumboOverlay/JumboOverlay';
import { Div } from '@jumbo/shared';
import { Message, RemoveRedEye, Share } from '@mui/icons-material';
import { CardActions, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

const ActionButton = () => {
  return (
    <IconButton sx={{ color: 'common.white' }}>
      <Share />
    </IconButton>
  );
};


function ExplorePlaceCard({ height }: { height: number }) {
  return (
    <JumboCardNew
      action={<ActionButton />}
      //   bgImage={`${ASSET_IMAGES}/Explore_place.jpg`}
      sx={{ height: height ? height : 390 }}
      contentSx={{ p: 0 }}
    >
      <JumboOverlay
        opacity={1}
        color={(theme) => theme.palette.background.paper}
        margin={['auto', 20, 20, 20]}
        sx={{
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Div sx={{ p: 3 }}>
          <Stack>
            <Typography variant={'h6'} color={'text.secondary'}>
              26 January, 03:00 PM
            </Typography>
            <Typography variant={'h2'}>
              Explore the best place of the world
            </Typography>
            <Typography variant={'body1'}>
              Plus more tips to keep your feet from stinking this summer
            </Typography>
          </Stack>
        </Div>
        <Divider />
        <CardActions>
          <Stack
            direction={'row'}
            spacing={1}
            color={'text.secondary'}
            flexGrow={1}
            justifyContent={'center'}
          >
            <Typography>
              <Message
                fontSize={'small'}
                sx={{ verticalAlign: 'middle', mr: 0.5 }}
              />{' '}
              34
            </Typography>
            <Typography>
              <RemoveRedEye
                fontSize={'small'}
                sx={{ verticalAlign: 'middle', mr: 0.5 }}
              />{' '}
              155
            </Typography>
          </Stack>
        </CardActions>
      </JumboOverlay>
    </JumboCardNew>
  );
}

export { ExplorePlaceCard };
