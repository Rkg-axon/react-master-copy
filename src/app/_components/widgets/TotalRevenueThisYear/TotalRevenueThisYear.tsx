'use client';
import { OnlineSignupChart } from '@app/_components/charts';
import { JumboCardNew } from '@jumbo/components';
import { Chip } from '@mui/material';
import { useTranslations } from 'next-intl';

function TotalRevenueThisYear() {
  const t = useTranslations();
  return (
    <JumboCardNew
      title={'$235,659'}
      subheader={t('widgets.subheader.totalRevenueYear')}
      action={
        <Chip
          size={'small'}
          label={'2022'}
          sx={{ bgcolor: '#F5F7FA', color: 'grey.800' }}
        />
      }
      reverse
      textColor='common.white'
      sx={{ borderTop: '4px solid #E73145' }}
      bgcolor={['#f4a3ac', '#e73145']}
      contentSx={{ pb: 0 }}
    >
      <OnlineSignupChart />
    </JumboCardNew>
  );
}

export { TotalRevenueThisYear };
