import {
  CustomContentTreemapChart,
  SimpleTreemapChart,
} from '@app/_components/charts/treemap';
import { Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const TreeMapChart = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.treemapChart')}
      </Typography>
      <Grid container spacing={3.75}>
        <Grid item xs={12} lg={6}>
          <SimpleTreemapChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomContentTreemapChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TreeMapChart;
