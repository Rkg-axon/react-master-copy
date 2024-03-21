import {
  ConnectNullAreaChart,
  PercentAreaChart,
  SimpleAreaChart,
  StackedAreaChart,
  SynchronizedAreaChart,
} from '@app/_components/charts/area';
import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ChartArea = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.areaChart')}
      </Typography>
      <Stack spacing={3}>
        <SimpleAreaChart />
        <StackedAreaChart />
        <ConnectNullAreaChart />
        <SynchronizedAreaChart />
        <PercentAreaChart />
      </Stack>
    </React.Fragment>
  );
};

export default ChartArea;
