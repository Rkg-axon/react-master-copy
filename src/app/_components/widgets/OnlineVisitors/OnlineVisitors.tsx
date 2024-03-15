'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Theme, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ChartOnlineVisitors } from './components';

const OnlineVisitors = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h3'}>
          {t('widgets.title.onlineVisitors')}
        </Typography>
      }
      subheader={
        <Typography variant={'h6'} color={'text.secondary'} mb={0}>
          {t('widgets.subheader.onlineVisitors')}
        </Typography>
      }
    >
      <Div sx={{ p: (theme: Theme) => theme.spacing(0, 3, 3) }}>
        <Typography variant={'h5'}>2,855 users online</Typography>
      </Div>
      <ChartOnlineVisitors />
    </JumboCard>
  );
};

export { OnlineVisitors };
