import { JumboCard } from '@jumbo/components';
import { useTranslations } from 'next-intl';
import { TicketsStatusChart } from './components';

const TicketsStatus = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.ticketStatus')}
      sx={{ textAlign: 'center' }}
      contentWrapper
      contentSx={{
        px: 3,
        pt: 2,
        '&:last-child': {
          pb: 6.5,
        },
      }}
    >
      <TicketsStatusChart />
    </JumboCard>
  );
};

export { TicketsStatus };
