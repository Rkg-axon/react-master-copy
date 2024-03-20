import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { useTranslations } from 'next-intl';
import { RecentTicketsList } from './components';

const RecentTickets = () => {
  const t = useTranslations();
  return (
    <JumboCard title={t('widgets.title.recentTicket')}>
      <JumboScrollbar autoHeight autoHeightMin={284}>
        <RecentTicketsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { RecentTickets };
