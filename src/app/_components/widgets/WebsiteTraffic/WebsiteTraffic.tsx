'use clients';
import { JumboCard } from '@jumbo/components';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ChartWebsiteTraffic } from './components';

const WebsiteTraffic = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h4'} mb={0}>
          {t('widgets.title.websiteTraffics')}
        </Typography>
      }
      sx={{ textAlign: 'center' }}
    >
      <ChartWebsiteTraffic />
    </JumboCard>
  );
};

export { WebsiteTraffic };
