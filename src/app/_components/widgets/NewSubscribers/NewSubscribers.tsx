import { JumboCard } from '@jumbo/components';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { NewSubscribersChart } from './components';

const NewSubscribers = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={<StarIcon sx={{ color: 'common.white' }} />}
      bgcolor={['#E44A77']}
      sx={{ color: 'common.white' }}
      contentWrapper
      contentSx={{ pt: 0.5 }}
    >
      <Grid container columnSpacing={2} alignItems={'flex-end'}>
        <Grid item xs={6}>
          <Typography variant={'h2'} color={'common.white'}>
            85k+
          </Typography>
          <Typography variant={'h6'} color={'common.white'} mb={0}>
            {t('widgets.subheader.newSubscribers')}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <NewSubscribersChart />
        </Grid>
      </Grid>
    </JumboCard>
  );
};

export { NewSubscribers };
