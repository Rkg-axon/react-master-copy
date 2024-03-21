import {
  BiaxialBarChart,
  CustomShapeBarChart,
  MixBarChart,
  PositiveAndNegativeBarChart,
  StackedBarChart,
  StackedWithErrorBarChart,
  TinyBarChart,
} from '@app/_components/charts/bar';
import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const BarChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.barChart')}
      </Typography>
      <Stack spacing={3}>
        <TinyBarChart />
        <StackedBarChart />
        <StackedWithErrorBarChart />
        <MixBarChart />
        <CustomShapeBarChart />
        <PositiveAndNegativeBarChart />
        <BiaxialBarChart />
      </Stack>
    </React.Fragment>
  );
};

export default BarChart;
