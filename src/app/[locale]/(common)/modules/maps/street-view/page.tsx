import { StreetViewPanoramaMap } from '@app/_components/maps';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import React from 'react';

const StreetViewPanorama = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.streetViewMap')}
      </Typography>
      <StreetViewPanoramaMap />
    </React.Fragment>
  );
};

export default StreetViewPanorama;
