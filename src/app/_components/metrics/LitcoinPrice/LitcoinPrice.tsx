'use client';
import { ChartTotalRevenue } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { TrendingUp } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

const LitcoinPrice = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h3'} color={'common.white'}>
          $8,726
        </Typography>
      }
      subheader={
        <Typography variant={'h6'} color={'common.white'} mb={0}>
          {t('widgets.subheader.litcoinPrice')}
        </Typography>
      }
      action={
        <Typography variant={'body1'} color={'common.white'}>
          2%{' '}
          <TrendingUp
            sx={{ verticalAlign: 'middle', fontSize: '1rem', ml: 0.5 }}
          />
        </Typography>
      }
      bgcolor={['#23BCBA', '#45E994']}
      contentWrapper={true}
      contentSx={{ p: 3 }}
    >
      <ChartTotalRevenue />
    </JumboCard>
  );
};

export { LitcoinPrice };
