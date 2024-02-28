'use client';
import { OnlineSignupChartFilled } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { TrendingUp } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

const RipplePrice = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h3'} color={'common.white'}>
          $9,626
        </Typography>
      }
      subheader={
        <Typography variant={'h6'} color={'common.white'} mb={0}>
          {t('widgets.subheader.ripplePrice')}
        </Typography>
      }
      action={
        <Typography variant={'body1'}>
          6%{' '}
          <TrendingUp
            sx={{ verticalAlign: 'middle', fontSize: '1rem', ml: 0.5 }}
          />
        </Typography>
      }
      sx={{ color: 'common.white' }}
      bgcolor={['#E44A77']}
      contentWrapper={true}
      contentSx={{ p: 3 }}
    >
      <OnlineSignupChartFilled color={'#fff'} shadowColor={'#000000'} />
    </JumboCard>
  );
};

export { RipplePrice };
