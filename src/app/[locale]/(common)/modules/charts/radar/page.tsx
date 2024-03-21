import {
  SimpleRadarChart,
  SpecificDomainRadarChart,
} from '@app/_components/charts/radar';
import { Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const RadarChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.radarChart')}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid item xs={12} lg={6}>
          <SimpleRadarChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SpecificDomainRadarChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RadarChart;
