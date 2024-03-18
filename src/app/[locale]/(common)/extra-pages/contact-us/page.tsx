'use client';
import { ContactsDetail } from '@app/_components/extraPages/ContactUs/components/data/ContactsDetail';
import { SocialIcons } from '@app/_components/extraPages/ContactUs/components/data/SocialIcons';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { Div } from '@jumbo/shared';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
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
        <Div sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <CardContent>
            <Typography variant='h6' color={'text.secondary'}>
              Send Message
            </Typography>
            <Typography component={'h2'} variant='h1' mb={3}>
              Let's talk
            </Typography>
            <Box
              component='form'
              sx={{
                mx: -1,

                '& .MuiFormControl-root:not(.MuiTextField-root)': {
                  p: 1,
                  mb: 2,
                  width: { xs: '100%', sm: '50%' },
                },

                '& .MuiFormControl-root.MuiFormControl-fluid': {
                  width: '100%',
                },
              }}
              autoComplete='off'
            >
              <FormControl>
                <TextField
                  fullWidth
                  id='firstname'
                  label='Enter Name'
                  defaultValue='First name'
                />
              </FormControl>
              <FormControl>
                <TextField
                  fullWidth
                  id='lastname'
                  label='Last Name'
                  defaultValue='Last name'
                />
              </FormControl>
              <FormControl>
                <TextField
                  fullWidth
                  id='email'
                  label='Email'
                  defaultValue='Enter email address'
                />
              </FormControl>
              <FormControl>
                <TextField
                  fullWidth
                  id='phoneno'
                  label='Phone No.'
                  defaultValue='Enter phone number'
                />
              </FormControl>
              <FormControl className='MuiFormControl-fluid'>
                <TextField
                  fullWidth
                  id='website'
                  label='Website'
                  defaultValue='Enter URL'
                />
              </FormControl>
              <FormControl className='MuiFormControl-fluid'>
                <TextField
                  fullWidth
                  id='help'
                  multiline
                  rows={4}
                  label='How can we help you?'
                  defaultValue='Enter message'
                />
              </FormControl>
              <Div sx={{ mx: 1 }}>
                <Button variant={'contained'}>Submit</Button>
              </Div>
            </Box>
          </CardContent>
        </Div>
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
