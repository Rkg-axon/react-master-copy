import { Grid } from '@mui/material';
import { PortfolioBalance } from './components';

export default function Widgets() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} lg={6}>
        <PortfolioBalance />
      </Grid>
    </Grid>
  );
}
