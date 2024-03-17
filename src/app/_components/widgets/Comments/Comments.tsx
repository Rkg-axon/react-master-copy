import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { Chip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { CommentsList } from './components';

const Comments = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.comments')}
      action={
        <Chip label={'8 New Comments'} color={'primary'} size={'small'} />
      }
      headerSx={{ borderBottom: 1, borderBottomColor: 'divider' }}
    >
      <JumboScrollbar height={scrollHeight ? scrollHeight : 460}>
        <CommentsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { Comments };
