import { JumboCard } from '@jumbo/components';
import { Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import { GeneralInfo } from './components/GeneralInfo';
import { SiteAudienceInfo } from './components/SiteAudienceInfo';
import { SiteVisitsGraph } from './components/SiteVisitsGraph';

const WelcomeSummary = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.welcomeEMA')}
      contentWrapper
      contentSx={{ px: 3, pt: 1 }}
    >
      <Grid container spacing={3.75}>
        <Grid item xs={12} sm={6} lg={3}>
          <GeneralInfo />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={{ order: { lg: 3 } }}>
          <SiteAudienceInfo />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SiteVisitsGraph />
        </Grid>
      </Grid>
    </JumboCard>
  );
};

export { WelcomeSummary };
