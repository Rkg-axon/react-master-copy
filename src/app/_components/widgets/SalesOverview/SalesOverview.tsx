'use client';
import { JumboCard } from '@jumbo/components';
import { Button, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import { ChartSalesOverview } from './components';
import { salesChartData } from './data';

function SalesOverview() {
  const [chartData, setChartData] = React.useState(salesChartData.monthly);
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.salesOverview')}
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
    >
      <ChartSalesOverview data={chartData} />
    </JumboCard>
  );
}

export { SalesOverview };
