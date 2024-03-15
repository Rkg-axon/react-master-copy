import { JumboCard } from '@jumbo/components';
import Grid from '@mui/material/Grid';
import { useTranslations } from 'next-intl';
import { CountriesList, VisitorsOnMap } from './components';
import { countryList } from './data';

const SiteVisitors = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.siteVisitors')}
      subheader={t('widgets.subheader.siteVisitors')}
      contentSx={{ p: 3 }}
      contentWrapper
    >
      <Grid container spacing={3.75}>
        <Grid item xs={12} md={5}>
          <CountriesList countries={countryList} />
        </Grid>
        <Grid item xs={12} md={7}>
          <VisitorsOnMap />
        </Grid>
      </Grid>
    </JumboCard>
  );
};

export { SiteVisitors };
