'use client';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { Div } from '@jumbo/shared';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  alpha,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ContactDetail = () => {
  const items = [
    {
      title: 'Address',
      description: '44 New Design Street <br/>Melbourne 005<br/>Australia 300',
      icon: <LocationOnIcon fontSize={'medium'} />,
      bgColor: (theme) => alpha(theme.palette.info.main, 0.35),
      color: 'info.main',
    },
    {
      title: 'Phone No.',
      description: '01 (800) 433 544 <br/>01 (800) 433 544',
      icon: <LocalPhoneIcon fontSize={'medium'} />,
      bgColor: (theme) => alpha(theme.palette.warning.main, 0.35),
      color: 'warning.main',
    },
    {
      title: 'Email',
      description: 'info@Example.com',
      icon: <MailIcon fontSize={'medium'} />,
      bgColor: (theme) => alpha(theme.palette.primary.main, 0.35),
      color: 'primary.main',
    },
  ];
  return (
    <>
      {items?.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ minHeight: '100%' }}>
            <CardContent
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: item?.bgColor,
                  width: 52,
                  height: 52,
                  border: 1,
                  color: item?.color,
                  borderColor: item?.color,
                  boxShadow: 2,
                  mb: 3,
                }}
              >
                {item?.icon}
              </Avatar>
              <Typography variant={'h5'}>{item?.title}</Typography>
              <Typography
                variant={'body1'}
                color={'text.secondary'}
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

const SocialIcons = () => {
  const items = [
    {
      slug: 'facebook',
      background: 'linear-gradient(135deg, #91a9f1, #575fd8)',
      hoverBg: 'linear-gradient(135deg, #575fd8, #91a9f1)',
      icon: <FacebookIcon />,
    },
    {
      slug: 'Twitter',
      background: 'linear-gradient(135deg, #36bae0, #5a80e8)',
      hoverBg: 'linear-gradient(135deg, #5a80e8, #36bae0)',
      icon: <TwitterIcon />,
    },
    {
      slug: 'Instagram',
      background: 'linear-gradient(135deg, #a436af, #cc4d82)',
      hoverBg: 'linear-gradient(135deg, #cc4d82, #a436af)',
      icon: <InstagramIcon />,
    },
    {
      slug: 'LinkedIn',
      background: 'linear-gradient(135deg, #485596, #24B4CF)',
      hoverBg: 'linear-gradient(135deg, #24B4CF, #485596)',
      icon: <LinkedInIcon />,
    },
    {
      slug: 'Pinterest',
      background: 'linear-gradient(135deg, #D66060, #AF0707)',
      hoverBg: 'linear-gradient(135deg, #AF0707, #D66060)',
      icon: <PinterestIcon />,
    },
    {
      slug: 'YouTube',
      background: 'linear-gradient(135deg, #F187E5, #E843D6)',
      hoverBg: 'linear-gradient(135deg, #E843D6, #F187E5)',
      icon: <YouTubeIcon />,
    },
  ];
  return (
    <Div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Typography variant='h1' mb={2}>
        Follow Us
      </Typography>
      <Stack direction={'row'} spacing={1} mb={1}>
        {items?.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              borderRadius: 1,
              color: 'common.white',
              background: item?.background,

              '&:hover': {
                background: item?.hoverBg,
              },
            }}
            aria-label={item?.slug}
          >
            {item?.icon}
          </IconButton>
        ))}
      </Stack>
    </Div>
  );
};

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
        <ContactDetail />
      </Grid>
      <SocialIcons />
    </React.Fragment>
  );
}
