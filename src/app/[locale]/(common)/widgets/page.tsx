import { EarningExpenses, PortfolioBalance } from '@app/_components/widgets';
import AyurvedaCard from '@app/_components/widgets/AyurvedaCard/AyurvedaCard';
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
