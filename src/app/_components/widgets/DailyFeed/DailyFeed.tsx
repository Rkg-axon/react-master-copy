'use client';
import { CardActions, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import { JumboCard } from '@jumbo/components';
import { JumboScrollbar } from '@jumbo/components/JumboScrollbar';
import { useTranslations } from 'next-intl';
import { FeedItem } from './components';
import { dailyFeed } from './data';

const DailyFeed = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.dailyFeed')}
      action={<Chip label={'23 New Feeds'} size={'small'} color={'warning'} />}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 498}
      >
        <List disablePadding>
          {dailyFeed.map((feed, index) => (
            <FeedItem key={index} feed={feed} />
          ))}
        </List>
      </JumboScrollbar>
      <Divider />
      <CardActions sx={{ py: (theme) => theme.spacing(1.5) }}>
        <Typography variant={'h6'} color={'text.secondary'} mb={0}>
          {'Last Updated 30 min ago'}
        </Typography>
      </CardActions>
    </JumboCard>
  );
};

export { DailyFeed };
