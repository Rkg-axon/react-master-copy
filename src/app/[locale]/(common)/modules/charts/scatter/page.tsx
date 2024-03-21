import {
  JointScatterChart,
  MultipleYAxesScatterChart,
  SimpleScatterChart,
  ThreeDimensionalScatterChart,
} from '@app/_components/charts/scatter';
import { Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ScatterChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.scatterChart')}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid item xs={12} lg={6}>
          <SimpleScatterChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <JointScatterChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ThreeDimensionalScatterChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <MultipleYAxesScatterChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ScatterChart;
