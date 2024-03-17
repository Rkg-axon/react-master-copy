import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { useTranslations } from 'next-intl';
import AuthorsList from './components/AuthorsList/AuthorsList';

const PopularAuthors = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.popularAuthors')}
      subheader={t('widgets.subheader.popularAuthors')}
      headerSx={{ borderBottom: 1, borderBottomColor: 'divider' }}
    >
      <JumboScrollbar>
        <AuthorsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { PopularAuthors };
