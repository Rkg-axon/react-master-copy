import { PopupInfoMap } from '@app/_components/maps';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import React from 'react';

const PopupInfo = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h1'} mb={3}>
        {t('modules.title.popupInfoMap')}
      </Typography>
      <PopupInfoMap />
    </React.Fragment>
  );
};

export default PopupInfo;
