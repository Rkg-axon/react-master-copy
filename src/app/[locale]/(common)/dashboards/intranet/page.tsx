import { MarkerClustererMap } from '@app/_components/maps/MarkerClustererMap';
import { Orders } from '@app/_components/metrics/Orders';
import { PageViews } from '@app/_components/metrics/PageViews';
import { Visits } from '@app/_components/metrics/Visits';
import { CurrentProjectsList } from '@app/_components/widgets/CurrentProjectsList';
import { DailyFeed } from '@app/_components/widgets/DailyFeed';
import { HeaderChart } from '@app/_components/widgets/HeaderChart';
import { LatestNotifications } from '@app/_components/widgets/LatestNotifications';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { PopularArticles } from '@app/_components/widgets/PopularArticles';
import { PopularProducts } from '@app/_components/widgets/PopularProducts';
import { RecentActivities } from '@app/_components/widgets/RecentActivities';
import { TaskListExpandable } from '@app/_components/widgets/TaskListExpandable';
import { UserPhotos } from '@app/_components/widgets/UserPhotos';
import { UserProfileCard1 } from '@app/_components/widgets/UserProfileCard1';
import { WeeklySales } from '@app/_components/widgets/WeeklySales';
import { Grid } from '@mui/material';

const Intranet = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12}>
        <HeaderChart />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} lg={7}>
            <Grid container spacing={3.75}>
              <Grid item xs={12} sm={6}>
                <PageViews />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Orders />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Visits />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <UserProfileCard1 />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <PopularArticles scrollHeight={423} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentActivities scrollHeight={342} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentProjectsList scrollHeight={341} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyFeed scrollHeight={400} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TaskListExpandable scrollHeight={395} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingCampaign scrollHeight={428} />
      </Grid>
      <Grid item xs={12} md={6}>
        <LatestNotifications scrollHeight={387} />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklySales />
      </Grid>
      <Grid item xs={12} md={6}>
        <UserPhotos />
      </Grid>
      <Grid item xs={12}>
        <MarkerClustererMap />
      </Grid>
      <Grid item xs={12}>
        <PopularProducts />
      </Grid>
    </Grid>
  );
};

export default Intranet;
