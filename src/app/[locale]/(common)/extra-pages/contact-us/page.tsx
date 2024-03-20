import { ContactUsForm } from '@app/_components/extraPages/ContactUs/components/ContactUsForm';
import { ContactsDetail } from '@app/_components/extraPages/ContactUs/components/ContactsDetail';
import { SocialIcons } from '@app/_components/extraPages/ContactUs/components/SocialIcons';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';

import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function ContactUs() {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant='h1' mb={3}>
        {t('extraPages.title.contactUs')}
      </Typography>
      <Card sx={{ display: 'flex', mb: 3.5 }}>
        <ContactUsForm />
        <CardMedia
          component='img'
          sx={{
            flexShrink: 0,
            flexBasis: '40%',
            display: { xs: 'none', md: 'block' },
          }}
          image={getAssetPath(`${ASSET_IMAGES}/apps/contactus.jpg`, '640x920')}
          alt='Contact Us'
        />
      </Card>
      <Grid container spacing={3.75} mb={3.5}>
        <ContactsDetail />
      </Grid>
      <SocialIcons />
    </React.Fragment>
  );
}
