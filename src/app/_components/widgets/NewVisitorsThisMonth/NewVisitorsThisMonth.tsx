import { EmailCampaignChart } from '@app/_components/charts';
import { JumboCardNew } from '@jumbo/components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTranslations } from 'next-intl';

const NewVisitorsThisMonth = () => {
  const t = useTranslations();
  return (
    <JumboCardNew
      title={'24,569'}
      subheader={t('widgets.subheader.newVisitors')}
      action={<TrendingUpIcon fontSize={'small'} />}
      reverse
      sx={{ borderTop: '4px solid #F39711' }}
      textColor='common.white'
      bgcolor={['#f9cc8a', '#f39711']}
      contentSx={{ pb: 0 }}
    >
      <EmailCampaignChart />
    </JumboCardNew>
  );
};

export { NewVisitorsThisMonth };
