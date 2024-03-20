'use client';
import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { Article, Refresh } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import { CampaignsList } from './components';

const MarketingCampaign = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.marketingCampaign')}
      subheader={t('widgets.subheader.marketingCampaign')}
      action={
        <React.Fragment>
          <Chip label={'Today'} size={'small'} sx={{ mr: 1 }} />
          <JumboDdMenu
            menuItems={[
              {
                icon: <Refresh sx={{ fontSize: 20 }} />,
                title: 'Refresh',
                slug: 'refresh',
              },
              {
                icon: <Article sx={{ fontSize: 20 }} />,
                title: 'All campaigns',
                slug: 'articles',
              },
            ]}
          />
        </React.Fragment>
      }
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 356}
      >
        <CampaignsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { MarketingCampaign };
