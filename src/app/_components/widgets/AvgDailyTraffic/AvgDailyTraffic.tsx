import { JumboCard } from '@jumbo/components';
import TimelineIcon from '@mui/icons-material/Timeline';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import { AvgDailyTrafficChart } from './components/AvgDailyTrafficChart';

const AvgDailyTraffic = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h2'} color={'common.white'}>
          756+
        </Typography>
      }
      subheader={
        <Typography variant={'h6'} color={'common.white'} mb={0}>
          {t('widgets.subheader.avgDailyTraffic')}
        </Typography>
      }
      action={<TimelineIcon />}
      sx={{ color: 'common.white' }}
      bgcolor={['#3D2C8D']}
    >
      <AvgDailyTrafficChart />
    </JumboCard>
  );
};

export { AvgDailyTraffic };
