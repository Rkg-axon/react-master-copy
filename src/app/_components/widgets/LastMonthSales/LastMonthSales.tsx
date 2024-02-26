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
      bgcolor={['#c1b2e6', '#7352c7']}
      textColor='common.white'
      action={<Timeline />}
      reverse={true}
      sx={{ borderTop: '4px solid #7352C7' }}
    >
      <Div sx={{ p: 3, pb: 0 }}>
        <OnlineSignupChart />
      </Div>
    </JumboCard>
  );
}

export { LastMonthSales };
