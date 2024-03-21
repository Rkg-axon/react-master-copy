'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import { SalesReportChart } from './component';

function SalesReport() {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h4'} mb={0}>
          {t('widgets.title.salesReports')}
        </Typography>
      }
      contentWrapper
      contentSx={{ pt: 0 }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={5} alignSelf={'center'}>
          <Typography variant={'h2'}>$685k+</Typography>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            sx={{ whiteSpace: 'nowrap' }}
            mb={0}
          >
            Past 9 months
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Div sx={{ my: '-2px' }}>
            <SalesReportChart />
          </Div>
        </Grid>
      </Grid>
    </JumboCard>
  );
}

export { SalesReport };
