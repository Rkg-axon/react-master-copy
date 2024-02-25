'use client';
import { FeaturedCard1 } from '@app/_components/cards';
import {
  AppUsers,
  DailyFeed,
  LastMonthSales,
  LatestNotifications,
  NewConnections,
  NewVisitorsThisMonth,
  OnlineSignupsFilled,
  Orders,
  RecentActivities,
  SalesOverview,
  SalesReport1,
  TotalRevenueThisYear,
  UpgradePlan,
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
      <Grid item xs={12} md={6} lg={4}>
        <RecentActivities />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <LastMonthSales />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <OnlineSignupsFilled />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <NewVisitorsThisMonth />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TotalRevenueThisYear />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UpgradePlan />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SalesReport1 />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <AppUsers />
      </Grid>
    </Grid>
  );
}
