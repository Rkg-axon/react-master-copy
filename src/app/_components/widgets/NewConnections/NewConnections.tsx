import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ConnectionsList } from './components';

function NewConnections({ scrollHeight }: { scrollHeight?: number }) {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.newConnection')}
      subheader={t('widgets.subheader.newConnection')}
      action={
        <Button variant={'contained'} size={'small'}>
          See all
        </Button>
      }
      contentWrapper
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 278}
      >
        <ConnectionsList />
      </JumboScrollbar>
    </JumboCard>
  );
}

export { NewConnections };
