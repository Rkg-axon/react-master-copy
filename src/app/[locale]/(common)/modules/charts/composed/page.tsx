import {
  AxisLabelsComposedChart,
  LineBarAreaComposedChart,
  SameDataComposedChart,
  VerticalComposedChart,
} from '@app/_components/charts/composed';
import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ComposedChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.composedChart')}
      </Typography>
      <Stack spacing={3}>
        <AxisLabelsComposedChart />
        <VerticalComposedChart />
        <SameDataComposedChart />
        <LineBarAreaComposedChart />
      </Stack>
    </React.Fragment>
  );
};

export default ComposedChart;
