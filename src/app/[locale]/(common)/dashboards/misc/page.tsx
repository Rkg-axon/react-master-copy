import { FeaturedCard1 } from '@app/_components/cards';
import { SalesOverview } from '@app/_components/widgets';
import { FolderOpen } from '@mui/icons-material';
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
          <Grid item xs={12} sm={6} lg={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
