import { JumboScrollbar } from '@jumbo/components';
import { Button, Card, CardHeader } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ConnectionsList } from './components';

function NewConnections() {
  const t = useTranslations();
  return (
    <Card sx={{ p: 0 }}>
      <CardHeader
        title={t('widgets.title.newConnection')}
        subheader={t('widgets.subheader.newConnection')}
        action={
          <Button variant={'contained'} size={'small'}>
            See all
          </Button>
        }
      />
      <JumboScrollbar height={278}>
        <ConnectionsList />
      </JumboScrollbar>
    </Card>
  );
}

export { NewConnections };
