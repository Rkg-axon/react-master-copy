'use client';
import { EmailCampaignChart } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTranslations } from 'next-intl';

const NewVisitorsThisMonth = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={'24,569'}
      subheader={t('widgets.subheader.newVisitors')}
      action={<TrendingUpIcon fontSize={'small'} />}
      reverse
      sx={{ borderTop: '4px solid #F39711' }}
      textColor='common.white'
      bgcolor={['#f9cc8a', '#f39711']}
    >
      <Div sx={{ p: 3, pb: 0 }}>
        <EmailCampaignChart />
      </Div>
    </JumboCard>
  );
};

export { NewVisitorsThisMonth };
