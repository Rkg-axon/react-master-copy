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
      contentSx={{ p: 0 }}
      headerSx={{ pb: 1 }}
      sx={{
        '.MuiCardHeader-action': {
          my: -0.75,
          mr: -1,
        },
      }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 395}
      >
        <ArticlesList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { PopularArticles };
