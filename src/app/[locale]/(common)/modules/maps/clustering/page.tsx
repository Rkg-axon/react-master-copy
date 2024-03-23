import { MarkerClustererMap } from '@app/_components/maps';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import React from 'react';
const MarkerClusterer = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.clustererMap')}
      </Typography>
      <MarkerClustererMap padding />
    </React.Fragment>
  );
};

export default MarkerClusterer;
