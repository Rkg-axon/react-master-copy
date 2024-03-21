'use client';
import { OnlineSignupChart } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Chip } from '@mui/material';
import { useTranslations } from 'next-intl';

function TotalRevenueThisYear() {
  const t = useTranslations();
  return (
    <JumboCard
      title={'$235,659'}
      subheader={t('widgets.subheader.totalRevenueYear')}
      action={
        <Chip
          size={'small'}
          label={'2022'}
          sx={{ bgcolor: '#F5F7FA', color: 'grey.800' }}
        />
      }
      textColor='common.white'
      bgcolor={['#f4a3ac', '#e73145']}
      reverse
      sx={{
        borderTop: '4px solid #E73145',
        '.MuiCardHeader-title': {
          color: 'inherit',
          fontSize: '1.25rem',
        },
        '.MuiCardHeader-subheader': {
          color: 'inherit',
        },
      }}
    >
      <Div sx={{ p: 3, pb: 0 }}>
        <OnlineSignupChart />
      </Div>
    </JumboCard>
  );
}

export { TotalRevenueThisYear };
