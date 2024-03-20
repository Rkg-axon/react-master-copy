'use client';
import { OnlineSignupChart } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Timeline } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

function LastMonthSales() {
  const t = useTranslations();
  return (
    <JumboCard
      title='756+'
      subheader={t('widgets.subheader.latestMonthSales')}
      action={<Timeline />}
      bgcolor={['#c1b2e6', '#7352c7']}
      textColor='common.white'
      reverse={true}
      sx={{
        borderTop: '4px solid #7352C7',
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

export { LastMonthSales };
