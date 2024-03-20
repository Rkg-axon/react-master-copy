'use client';

import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { Article, Refresh } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { PostsList } from './components';

const LatestPosts = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.latestPosts')}
      subheader={t('widgets.subheader.latestPosts')}
      action={
        <JumboDdMenu
          menuItems={[
            {
              icon: <Refresh sx={{ fontSize: 20 }} />,
              title: 'Refresh',
              slug: 'refresh',
            },
            {
              icon: <Article sx={{ fontSize: 20 }} />,
              title: 'Articles',
              slug: 'article',
            },
          ]}
        />
      }
      contentWrapper={true}
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 334}
      >
        <PostsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { LatestPosts };
