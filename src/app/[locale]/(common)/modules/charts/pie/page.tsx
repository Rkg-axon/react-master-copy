import React from 'react';
import {
  CustomActiveShapePieChart,
  CustomizedLabelPieChart,
  PaddingAnglePieChart,
  SimplePieChart,
  StraightAnglePieChart,
  TwoLevelPieChart,
} from '@app/_components/charts/pie';
import { Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const PieChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.pieChart')}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid item xs={12} md={6}>
          <TwoLevelPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <StraightAnglePieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomActiveShapePieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomizedLabelPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <SimplePieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaddingAnglePieChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PieChart;
