import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { useTranslations } from 'next-intl';
import { ArticlesList } from './components/ArticlesList';
import { menuItems } from './data';

const PopularArticles = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.popularArticles')}
      action={<JumboDdMenu menuItems={menuItems} />}
      contentWrapper
      contentSx={{ px: 3 }}
    >
      <JumboScrollbar height={scrollHeight ? scrollHeight : 395}>
        <ArticlesList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { PopularArticles };
