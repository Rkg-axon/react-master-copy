import { ButtonStack } from '@app/_components/_core/ButtonStack';
import { Progressbar } from '@app/_components/_core/Progressbar';
import AddIcon from '@mui/icons-material/Add';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import { BalanceSummary } from './components';

const PortfolioBalance = () => {
  const t = useTranslations();
  return (
    <Card>
      <CardHeader title={t('widgets.title.cryptoPortfolio')} />
      <CardContent sx={{ pt: 2 }}>
        <Stack direction={'row'} spacing={3}>
          <Grid item xs={6}>
            <BalanceSummary
              amount={'$179,626'}
              trend={{ percentage: 13, direction: 'up' }}
            />
            <ButtonStack>
              <Button variant={'contained'} color={'secondary'}>
                Deposit
              </Button>
              <Button variant={'contained'} color={'inherit'} disableElevation>
                Withdraw
              </Button>
            </ButtonStack>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={'h5'} color={'text.secondary'} mb={2}>
              Portfolio distribution
            </Typography>
            <Progressbar
              variant={'determinate'}
              color={'success'}
              label='BTC'
              subLabel='8.75'
              value={70}
            />
            <Progressbar
              label='RLP'
              subLabel='4.87'
              variant='determinate'
              color='warning'
              value={40}
              sx={{ mb: 0 }}
            />
          </Grid>
        </Stack>
      </CardContent>
      <CardActions sx={{ pt: 0.5, pb: 2 }}>
        <Button startIcon={<AddIcon />} size='small'>
          Add More
        </Button>
      </CardActions>
    </Card>
  );
};

export { PortfolioBalance };
