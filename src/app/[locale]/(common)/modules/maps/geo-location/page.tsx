import { GeoLocationMap } from '@app/_components/maps';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import React from 'react';

const GeoLocation = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.geoLocationMap')}
      </Typography>
      <GeoLocationMap />
    </React.Fragment>
  );
};

export default GeoLocation;
