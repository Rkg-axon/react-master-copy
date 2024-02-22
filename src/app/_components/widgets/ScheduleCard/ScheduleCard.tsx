import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { Div } from '@jumbo/shared';
import { Card, CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ScheduleList } from './components';

const ScheduleCard = () => {
  return (
    <Card>
      <Div
        sx={{
          height: 260,
          backgroundImage: `linear-gradient(135deg, #843CF6, #38B8F2)`,
          color: 'common.white',
        }}
      >
        <CardHeader
          action={
            <JumboDdMenu
              menuItems={[
                { title: 'Setup a call' },
                { title: 'Schedule a task' },
              ]}
            />
          }
        />
        <Stack alignItems={'center'} mt={-2}>
          <Avatar
            sx={{
              bgcolor: 'common.white',
              height: 90,
              width: 90,
              fontSize: 28,
              color: '#475259',
              boxShadow: 2,
              mb: 2,
            }}
          >
            28
          </Avatar>
          <Typography variant={'h4'} color={'common.white'}>
            Monday
          </Typography>
          <Typography variant={'body1'} mb={1}>
            December 2021
          </Typography>
        </Stack>
      </Div>

      <Div sx={{ p: 3 }}>
        <ScheduleList />
      </Div>
    </Card>
  );
};

export { ScheduleCard };
