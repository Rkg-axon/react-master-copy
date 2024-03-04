import { Cities } from '@app/_components/metrics/Cities';
import { Properties } from '@app/_components/metrics/Properties';
import { QueriesStatistics } from '@app/_components/metrics/QueriesStatistics';
import { VisitsStatistics } from '@app/_components/metrics/VisitsStatistics';
import { DealsClosed } from '@app/_components/widgets/DealsClosed';
import { PopularAgents } from '@app/_components/widgets/PopularAgents';
import { PropertiesList } from '@app/_components/widgets/PropertiesList';
import { RecentActivities1 } from '@app/_components/widgets/RecentActivities1';
import { YourCurrentPlan } from '@app/_components/widgets/YourCurrentPlan';
import { Grid } from '@mui/material';

function Listing() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <Properties />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Cities />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <VisitsStatistics />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <QueriesStatistics />
      </Grid>
      <Grid item xs={12}>
        <PopularAgents />
      </Grid>
      <Grid item xs={12} md={6}>
        <YourCurrentPlan />
      </Grid>
      <Grid item xs={12} md={6}>
        <DealsClosed />
      </Grid>
      <Grid item xs={12} lg={8}>
        <PropertiesList />
      </Grid>
      <Grid item xs={12} lg={4}>
        <RecentActivities1 scrollHeight={556} />
      </Grid>
    </Grid>
  );
}

export default Listing;
