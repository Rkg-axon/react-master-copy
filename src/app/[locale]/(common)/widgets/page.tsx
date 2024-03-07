import AyurvedaCard from '@app/_components/widgets/AyurvedaCard/AyurvedaCard';
import { EarningExpenses } from '@app/_components/widgets/EarningExpenses';
import { PortfolioBalance } from '@app/_components/widgets/PortfolioBalance';
import { Grid } from '@mui/material';

export default function Widgets() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} lg={6}>
        <PortfolioBalance />
      </Grid>
      <Grid item xs={12} lg={6}>
        <EarningExpenses />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <AyurvedaCard />
      </Grid>
    </Grid>
  );
}
