import { FeaturedCard1 } from '@app/_components/cards';
import {
  DailyFeed,
  LatestNotifications,
  NewConnections,
  Orders,
  SalesOverview,
  UserProfileCard,
  UserSummary,
} from '@app/_components/widgets';
import { ScheduleCard } from '@app/_components/widgets/ScheduleCard';
import { EmojiObjectsOutlined, FolderOpen } from '@mui/icons-material';
import { Grid } from '@mui/material';

export default function Misc() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} lg={7}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} lg={2}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} sm={6} lg={12}>
            <FeaturedCard1
              title={'250'}
              subheader='Docs'
              icon={<FolderOpen sx={{ fontSize: 36 }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <FeaturedCard1
              title={'23'}
              subheader='Ideas'
              icon={<EmojiObjectsOutlined sx={{ fontSize: 42 }} />}
              bgcolor={['135deg', '#FBC79A', '#D73E68']}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} sm={6} lg={12}>
            <Orders />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <UserSummary />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <LatestNotifications />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <DailyFeed />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ScheduleCard />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UserProfileCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewConnections />
      </Grid>
    </Grid>
  );
}
