'use client';

import { CardHeaderWithExtras } from '@app/_components/_core';
import { JumboCard, JumboScrollbar, JumboTabs } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { Refresh, Settings } from '@mui/icons-material';
import { CardContent } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import { CryptoNewsList } from './components';
import {
  CryptoNewsType,
  NewsCategoryType,
  cryptoNews,
  newsCategories,
} from './data';

function useFilterCryptoNews(
  newsItems: CryptoNewsType[],
  category: NewsCategoryType
) {
  if (category.slug === 'all') return newsItems;
  return newsItems.filter((item) => item.category === category.slug);
}
const CryptoNews = () => {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = React.useState<NewsCategoryType>(
    newsCategories[0]
  );

  const visibleNewsItems = useFilterCryptoNews(cryptoNews, activeCategory);
  const handleTabChange = React.useCallback((item: any) => {
    setActiveCategory(item);
  }, []);
  return (
    <JumboCard>
      <CardHeaderWithExtras
        title={t('widgets.title.cryptoNews')}
        count={20}
        extras={
          <JumboTabs
            items={newsCategories}
            onChange={handleTabChange}
            primaryKey='slug'
            labelKey='name'
            defaultValue={newsCategories[0]}
          />
        }
        action={
          <JumboDdMenu
            menuItems={[
              { icon: <Refresh />, title: 'Refresh' },
              { icon: <Settings />, title: 'Settings' },
            ]}
          />
        }
        spacing={3}
      />
      <CardContent
        sx={{
          '&:last-child': {
            pb: 2,
          },
          '& .MuiCollapse-entered:last-child': {
            '& .MuiListItemButton-root': {
              borderBottom: 0,
              borderBottomColor: 'transparent',
            },
          },
        }}
      >
        <JumboScrollbar height={585}>
          <CryptoNewsList items={visibleNewsItems} />
        </JumboScrollbar>
      </CardContent>
    </JumboCard>
  );
};

export { CryptoNews };
