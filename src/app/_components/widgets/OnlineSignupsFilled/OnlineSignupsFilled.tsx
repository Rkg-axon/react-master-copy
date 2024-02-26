import { RevenueChart } from '@app/_components/charts';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { TrendingUp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

function OnlineSignupsFilled() {
  const t = useTranslations();
  return (
    <JumboCard
      title={'10,241'}
      subheader={t('widgets.subheader.onlineSignups')}
      action={
        <Typography variant={'body1'}>
          1.5%
          <TrendingUp
            sx={{ verticalAlign: 'middle', fontSize: '1rem', ml: 0.5 }}
          />
        </Typography>
      }
      reverse
      textColor='common.white'
      sx={{ borderTop: '4px solid #3BD2A2' }}
      bgcolor={['#a3ead3', '#3bd2a2']}
    >
      <Div sx={{ p: 3, pb: 0 }}>
        <RevenueChart />
      </Div>
    </JumboCard>
  );
}

export { OnlineSignupsFilled };
