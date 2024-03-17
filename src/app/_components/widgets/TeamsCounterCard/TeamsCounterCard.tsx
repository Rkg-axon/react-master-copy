import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Typography } from '@mui/material';

const TeamsCounterCard = () => {
  return (
    <JumboCard bgcolor={['#E73145']}>
      <Div sx={{ display: 'flex', alignItems: 'center' }}>
        <img alt={''} src={`${ASSET_IMAGES}/dashboard/teamsIcon.svg`} />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={'common.white'} variant={'h2'} mb={0.5}>
            13
          </Typography>
          <Typography color={'common.white'} variant={'h5'} mb={0}>
            Teams
          </Typography>
        </Div>
      </Div>
    </JumboCard>
  );
};

export { TeamsCounterCard };
