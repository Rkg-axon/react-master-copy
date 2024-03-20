import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { Chip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ActivitiesList } from './components';

type RecentActivitiesProps = {
  scrollHeight?: number;
};

function RecentActivities({ scrollHeight }: RecentActivitiesProps) {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.recentActivities')}
      action={<Chip color={'warning'} size={'small'} label={'Last 20 days'} />}
      contentWrapper={true}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 278}
      >
        <ActivitiesList />
      </JumboScrollbar>
    </JumboCard>
  );
}

export { RecentActivities };
