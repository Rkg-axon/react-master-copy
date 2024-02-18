import { Avatar, Card, CardHeader, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

function UserSummary() {
  const t = useTranslations();
  return (
    <Card
      sx={{
        height: 116,
        '& .MuiCardHeader-root': {
          height: '100%',
        },
        '& .MuiCardHeader-avatar': {
          marginRight: '50px',
          marginLeft: '10px',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-35px',
            left: '-55px',
            width: 185,
            height: 185,
            backgroundColor: '#00C4B4',
            borderRadius: '50%',
          },
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: 60,
              height: 60,
              boxShadow: 2,
              position: 'relative',
            }}
            src={`/avatar/avatar7.jpg`}
            alt={''}
          />
        }
        title={
          <Typography variant={'h4'} mb={0}>
            {t('widgets.title.userSummary')}
          </Typography>
        }
        subheader={t('widgets.subheader.userSummary')}
      />
    </Card>
  );
}

export { UserSummary };
