'use client';
import { Div } from '@jumbo/shared';
import { Card, CardHeader, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ChartOrders } from './components';
import { orders } from './data';

function Orders() {
  const t = useTranslations();

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant={'h5'} mb={0.5}>
            {t('widgets.title.orders')}
          </Typography>
        }
        subheader={
          <Typography variant={'h6'} color={'text.secondary'} mb={0}>
            293
          </Typography>
        }
      />
      <Div sx={{ mt: -2.5 }}>
        <ChartOrders data={orders} />
      </Div>
    </Card>
  );
}

export { Orders };
