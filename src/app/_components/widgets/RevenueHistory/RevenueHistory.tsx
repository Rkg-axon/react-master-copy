import { JumboCard } from '@jumbo/components';
import { Grid, ListItemText, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { RevenueChart } from './components';

const RevenueHistory = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.revenueHistory')}
      contentWrapper
      contentSx={{ px: 3, pt: 1 }}
    >
      <Grid container spacing={3.75}>
        <Grid item xs={6}>
          <ListItemText
            primary={
              <Typography variant={'h3'} mb={0.5}>
                $216,759
              </Typography>
            }
            secondary={'YTD Revenue'}
          />
        </Grid>
        <Grid item xs={6}>
          <RevenueChart />
        </Grid>
      </Grid>
    </JumboCard>
  );
};
export { RevenueHistory };
