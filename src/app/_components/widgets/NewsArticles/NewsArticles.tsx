import { JumboCard } from '@jumbo/components';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { NewArticlesChart } from './components';

const NewArticles = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={<Typography variant={'h2'}>526+</Typography>}
      subheader={
        <Typography variant={'h6'} color={'text.secondary'}>
          {t('widgets.subheader.newArticles')}
        </Typography>
      }
      action={<BookmarkIcon />}
      headerSx={{ pb: 1.25 }}
    >
      <NewArticlesChart />
    </JumboCard>
  );
};

export { NewArticles };
