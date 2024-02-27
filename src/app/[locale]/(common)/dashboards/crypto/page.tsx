import { BitcoinPrice } from '@app/_components/metrics';
import { Grid } from '@mui/material';

export default function Crypto() {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <BitcoinPrice />
      </Grid>
    </Grid>
  );
}
