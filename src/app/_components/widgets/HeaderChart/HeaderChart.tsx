import { ChartIntranet } from '@app/_components/charts/ChartIntranet';
import { JumboCard } from '@jumbo/components';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const HeaderChart = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h2'} color={'common.white'} mb={0}>
          {t('widgets.title.intranet')}
        </Typography>
      }
      action={
        <Breadcrumbs aria-label='breadcrumb' color={'common.white'}>
          <Link underline='hover' color='inherit' href='/'>
            Home
          </Link>
          <Link underline='hover' color='inherit' href='/dashboards/intranet'>
            Dashboard
          </Link>
          <Typography color='inherit'>Intranet</Typography>
        </Breadcrumbs>
      }
      bgcolor={['#2B3361']}
      sx={{
        color: 'common.white',
        borderRadius: 0,
        mx: { xs: -4, lg: -6 },
        mt: -4,
      }}
    >
      <ChartIntranet />
    </JumboCard>
  );
};

export { HeaderChart };
