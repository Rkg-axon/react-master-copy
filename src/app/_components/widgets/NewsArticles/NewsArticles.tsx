import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { NewArticlesChart } from './components';

const NewArticles = () => {
  const t = useTranslations();
  return (
    <Card>
      <CardHeader
        title={<Typography variant={'h2'}>526+</Typography>}
        subheader={
          <Typography variant={'h6'} color={'text.secondary'}>
            {t('widgets.subheader.newArticles')}
          </Typography>
        }
        action={<BookmarkIcon />}
        sx={{ pb: 1.25 }}
      />
      <CardContent>
        <NewArticlesChart />
      </CardContent>
    </Card>
  );
};

export { NewArticles };
