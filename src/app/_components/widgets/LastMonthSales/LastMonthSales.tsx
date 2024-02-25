import { OnlineSignupChart } from '@app/_components/charts';
import { JumboCardNew } from '@jumbo/components';
import { Timeline } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

function LastMonthSales() {
  const t = useTranslations();
  return (
    <JumboCardNew
      title='756+'
      subheader={t('widgets.subheader.latestMonthSales')}
      bgcolor={['#c1b2e6', '#7352c7']}
      textColor='common.white'
      action={<Timeline />}
      reverse={true}
      sx={{ borderTop: '4px solid #7352C7' }}
      contentSx={{ pb: 0 }}
    >
      <OnlineSignupChart />
    </JumboCardNew>
  );
}

export { LastMonthSales };
