import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { useTranslations } from 'next-intl';
import { RecentActivitiesList } from './components';

const RecentActivities1 = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.recentActivities')}
      contentWrapper
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 480}
      >
        <RecentActivitiesList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { RecentActivities1 };
