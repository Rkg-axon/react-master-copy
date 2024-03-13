import { SalesStatistics } from '@app/_components/widgets/SalesStatistics';
import { Grid } from '@mui/material';

export default function ecommerce() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12}>
        <SalesStatistics />
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <SalesReport />
      </Grid>
      <Grid item xs={12} md={6}>
        <YearlyProfileReport />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <AppUsers />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <OnlineVisitors />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <WebsiteTraffic />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <OrdersReport subTitle={null} chartHeight={183} />
      </Grid>
      <Grid item xs={12}>
        <PopularProducts />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingCampaign scrollHeight={428} />
      </Grid>
      <Grid item xs={12} md={6}>
        <LatestAlerts scrollHeight={385} />
      </Grid>
      <Grid item xs={12}>
        <SiteVisitors />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LastMonthSales />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <OnlineSignupsFilled />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <NewVisitorsThisMonth />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalRevenueThisYear />
      </Grid> */}
    </Grid>
  );
}
