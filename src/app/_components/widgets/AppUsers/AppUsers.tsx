'use client';
import { ChartAppUsers } from '@app/_components/charts';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const AppUsers = () => {
  const t = useTranslations();
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h5'>{t('widgets.title.appUsers')}</Typography>
        <Typography variant='h6' color={'text.secondary'}>
          {t('widgets.subheader.appUsers')}
        </Typography>
        <ChartAppUsers />
      </CardContent>
    </Card>
  );
};

export { AppUsers };
