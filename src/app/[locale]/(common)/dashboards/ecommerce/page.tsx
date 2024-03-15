import { AppUsers } from '@app/_components/widgets/AppUsers';
import { LastMonthSales } from '@app/_components/widgets/LastMonthSales';
import { LatestNotifications } from '@app/_components/widgets/LatestNotifications';
import { MarketingCampaign } from '@app/_components/widgets/MarketingCampaign';
import { NewVisitorsThisMonth } from '@app/_components/widgets/NewVisitorsThisMonth';
import { OnlineSignupsFilled } from '@app/_components/widgets/OnlineSignupsFilled';
import { OnlineVisitors } from '@app/_components/widgets/OnlineVisitors';
import { OrdersReport } from '@app/_components/widgets/OrdersReport';
import { PopularProducts } from '@app/_components/widgets/PopularProducts';
import { SalesReport } from '@app/_components/widgets/SalesReport';
import { SalesStatistics } from '@app/_components/widgets/SalesStatistics';
import { SiteVisitors } from '@app/_components/widgets/SiteVisitors';
import { TotalRevenueThisYear } from '@app/_components/widgets/TotalRevenueThisYear';
import { WebsiteTraffic } from '@app/_components/widgets/WebsiteTraffic';
import { YearlyProfileReport } from '@app/_components/widgets/YearlyProfileReport';
import { Grid } from '@mui/material';

export default function ecommerce() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12}>
        <SalesStatistics />
      </Grid>
      <Grid item xs={12} md={6}>
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
        <LatestNotifications />
      </Grid>
      <Grid item xs={12}>
        <SiteVisitors />
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
    </Grid>
  );
}
