import { JumboScrollbar } from '@jumbo/components';
import { Card, CardContent, CardHeader, Chip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ActivitiesList } from './components';

type RecentActivitiesProps = {
  scrollHeight?: number;
};

function RecentActivities({ scrollHeight }: RecentActivitiesProps) {
  const t = useTranslations();
  return (
    <Card>
      <CardHeader
        title={t('widgets.title.recentActivities')}
        action={
          <Chip color={'warning'} size={'small'} label={'Last 20 days'} />
        }
      />
      <CardContent sx={{ px: 0 }}>
        <JumboScrollbar height={scrollHeight ? scrollHeight : 278}>
          <ActivitiesList />
        </JumboScrollbar>
      </CardContent>
    </Card>
  );
}

export { RecentActivities };
