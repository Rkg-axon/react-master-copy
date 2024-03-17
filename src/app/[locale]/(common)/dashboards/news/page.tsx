import { AvgDailyTraffic } from '@app/_components/widgets/AvgDailyTraffic';
import { DailyFeed } from '@app/_components/widgets/DailyFeed';
import { LatestNotifications } from '@app/_components/widgets/LatestNotifications';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { NewAuthors } from '@app/_components/widgets/NewAuthors';
import { NewSubscribers } from '@app/_components/widgets/NewSubscribers';
import { NewArticles } from '@app/_components/widgets/NewsArticles';
import { PopularAuthors } from '@app/_components/widgets/PopularAuthors';
import { Grid } from '@mui/material';

const News = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <NewSubscribers />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <NewArticles />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <NewAuthors />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <AvgDailyTraffic />
      </Grid>
      <Grid item xs={12} lg={5}>
        <PopularAuthors />
      </Grid>
      {/*  <Grid item xs={12} lg={7}>
        <PopularArticles />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <LatestNotifications />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyFeed />
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Comments scrollHeight={450} />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <MarketingCampaign scrollHeight={430} />
      </Grid>
    </Grid>
  );
};

export default News;
