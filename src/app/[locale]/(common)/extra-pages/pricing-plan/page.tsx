'use client';
import { PricePlan } from '@app/_components/extraPages/PricingPlan/components/PricePlan';
import { Span } from '@jumbo/shared';
import { Button, Grid, Theme, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const PricingPlan = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h2'} mb={4}>
        {t('extraPages.title.pricePlan')}
      </Typography>
      <Typography variant={'h5'} mb={3}>
        Basic
      </Typography>
      <Grid container spacing={3.75} mb={4}>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$25'}
            subheader={'Personal'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'primary.main',
            }}
          >
            <Button variant={'contained'} disableElevation sx={{ mb: 2 }}>
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$99'}
            subheader={'Business'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'primary.dark',
            }}
            sx={{
              transform: 'scale(1)',
              color: 'common.white',
              bgcolor: 'primary.light',
            }}
          >
            <Button variant={'contained'} disableElevation sx={{ mb: 2 }}>
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$49'}
            subheader={'Professional'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'primary.main',
            }}
          >
            <Button variant={'contained'} disableElevation sx={{ mb: 2 }}>
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
      </Grid>
      <Typography variant='h5' mb={3}>
        Circle
      </Typography>
      <Grid container spacing={3.75} mb={4}>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$25'}
            subheader={'Personal'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'warning.main',
              borderRadius: '50%',
              height: 224,
              width: 224,
              margin: (theme: Theme) => theme.spacing(5, 'auto', 0),
            }}
          >
            <Button
              variant={'contained'}
              disableElevation
              fullWidth
              size={'large'}
              sx={{ mb: 2, borderRadius: 8, maxWidth: 260 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$99'}
            subheader={'Business'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'primary.dark',
              borderRadius: '50%',
              height: 224,
              width: 224,
              margin: (theme: Theme) => theme.spacing(5, 'auto', 0),
            }}
            sx={{
              color: 'common.white',
              bgcolor: 'primary.light',
              transform: 'scale(1)',
            }}
          >
            <Button
              variant={'contained'}
              color={'warning'}
              disableElevation
              fullWidth
              size={'large'}
              sx={{ mb: 2, borderRadius: 8, maxWidth: 260 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$49'}
            subheader={'Professional'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'success.main',
              borderRadius: '50%',
              height: 224,
              width: 224,
              margin: (theme: Theme) => theme.spacing(5, 'auto', 0),
            }}
          >
            <Button
              variant={'contained'}
              disableElevation
              fullWidth
              size={'large'}
              sx={{ mb: 2, borderRadius: 8, maxWidth: 260 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
      </Grid>
      <Typography variant='h5' mb={3}>
        Classic
      </Typography>
      <Grid container spacing={3.75} mb={4}>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$25'}
            subheader={'Personal'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'info.main',
            }}
            sx={{
              borderRadius: 0,
              bgcolor: (theme: Theme) => theme.palette.grey[100],
            }}
          >
            <Button
              variant={'contained'}
              color={'info'}
              disableElevation
              sx={{ mb: 2 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$99'}
            subheader={'Business'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'primary.dark',
            }}
            sx={{
              color: 'common.white',
              bgcolor: 'primary.light',
              borderRadius: 0,
              transform: 'scale(1)',
            }}
          >
            <Button
              variant={'contained'}
              color={'warning'}
              disableElevation
              sx={{ mb: 2 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={'$49'}
            subheader={'Professional'}
            headerSx={{
              textAlign: 'center',
              bgcolor: 'success.main',
            }}
            sx={{ borderRadius: 0 }}
          >
            <Button
              variant={'contained'}
              color={'error'}
              disableElevation
              sx={{ mb: 2 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
      </Grid>
      <Typography variant='h5' mb={3}>
        Dark
      </Typography>
      <Grid container spacing={3.75} mb={4}>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={
              <Typography
                variant={'h5'}
                color='inherit'
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 3,
                }}
              >
                Personal
              </Typography>
            }
            subheader={
              <Typography
                variant={'h2'}
                fontSize={52}
                fontWeight={500}
                mb={0}
                color='inherit'
              >
                <Span
                  sx={{
                    fontSize: '50%',
                    verticalAlign: 'super',
                    fontWeight: '400',
                    mr: 0.5,
                  }}
                >
                  $
                </Span>
                25
              </Typography>
            }
            headerSx={{
              bgcolor: 'common.black',
            }}
          >
            <Button
              variant={'contained'}
              disableElevation
              fullWidth
              size={'large'}
              sx={{
                mb: 2,
                borderRadius: 2,
                maxWidth: 260,
                bgcolor: 'common.black',
              }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={
              <Typography
                variant={'h5'}
                color='inherit'
                sx={{ textTransform: 'uppercase', letterSpacing: 3 }}
              >
                Business
              </Typography>
            }
            subTitle={
              <Typography
                variant={'h2'}
                fontSize={52}
                fontWeight={500}
                mb={0}
                color='inherit'
              >
                <Span
                  sx={{
                    fontSize: '50%',
                    verticalAlign: 'super',
                    fontWeight: '400',
                    mr: 0.5,
                  }}
                >
                  $
                </Span>
                99
              </Typography>
            }
            headerSx={{ bgcolor: 'warning.main' }}
            sx={{
              bgcolor: 'common.black',
              color: 'common.white',
              transform: 'scale(1)',
            }}
          >
            <Button
              variant={'contained'}
              disableElevation
              color={'warning'}
              fullWidth
              size={'large'}
              sx={{ mb: 2, borderRadius: 2, maxWidth: 260 }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PricePlan
            title={
              <Typography
                variant={'h5'}
                color='inherit'
                sx={{ textTransform: 'uppercase', letterSpacing: 3 }}
              >
                Professional
              </Typography>
            }
            subTitle={
              <Typography
                variant={'h2'}
                fontSize={52}
                fontWeight={500}
                mb={0}
                color='inherit'
              >
                <Span
                  sx={{
                    fontSize: '50%',
                    verticalAlign: 'super',
                    fontWeight: '400',
                    mr: 0.5,
                  }}
                >
                  $
                </Span>
                49
              </Typography>
            }
            headerSx={{ bgcolor: 'common.black' }}
          >
            <Button
              variant={'contained'}
              disableElevation
              fullWidth
              size={'large'}
              sx={{
                mb: 2,
                borderRadius: 2,
                maxWidth: 260,
                bgcolor: 'common.black',
              }}
            >
              Buy Now
            </Button>
          </PricePlan>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PricingPlan;
