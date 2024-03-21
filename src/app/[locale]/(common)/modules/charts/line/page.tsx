import {
  ConnectNullLineChart,
  CustomizedDotLineChart,
  DashedLineChart,
  ReferenceLineChart,
  SimpleLineChart,
  SynchronizedLineChart,
  VerticalLineChart,
  XAxisPaddingLineChart,
} from '@app/_components/charts/line';
import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const LineChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.lineChart')}
      </Typography>
      <Stack spacing={3}>
        <SimpleLineChart />
        <VerticalLineChart />
        <CustomizedDotLineChart />
        <DashedLineChart />
        <ReferenceLineChart />
        <XAxisPaddingLineChart />
        <ConnectNullLineChart />
        <SynchronizedLineChart />
      </Stack>
    </React.Fragment>
  );
};

export default LineChart;
