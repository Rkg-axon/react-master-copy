'use client';

import { ChartLastMonthSales } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { TrendingUp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const BitcoinPrice = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h2'} color={'common.white'}>
          $9,626
        </Typography>
      }
      subheader={
        <Typography variant={'h6'} color={'common.white'} mb={0}>
          {t('widgets.subheader.bitcoinPrice')}
        </Typography>
      }
      action={
        <Typography variant={'body1'}>
          23%{' '}
          <TrendingUp
            sx={{ verticalAlign: 'middle', fontSize: '1rem', ml: 0.5 }}
          />
        </Typography>
      }
      headerSx={{ pb: 0 }}
      sx={{ color: 'common.white' }}
      bgcolor={['#6f42c1']}
    >
      <ChartLastMonthSales />
    </JumboCard>
  );
};

export { BitcoinPrice };
