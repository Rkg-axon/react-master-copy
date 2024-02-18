'use client';
import { Button, Card, CardHeader, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import { ChartSalesOverview } from './components';
import { salesChartData } from './data';

function SalesOverview() {
  const [chartData, setChartData] = React.useState(salesChartData.monthly);
  const t = useTranslations();
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant={'h4'}>
            {t('widgets.title.salesOverview')}
          </Typography>
        }
        action={
          <Stack direction={'row'} spacing={1}>
            <Button
              size={'small'}
              variant={'contained'}
              onClick={() => setChartData(salesChartData.monthly)}
            >
              Monthly
            </Button>
            <Button
              size={'small'}
              variant={'contained'}
              onClick={() => setChartData(salesChartData.yearly)}
            >
              Yearly
            </Button>
          </Stack>
        }
      />
      <ChartSalesOverview data={chartData} />
    </Card>
  );
}

export { SalesOverview };
