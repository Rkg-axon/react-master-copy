import { FeaturedCard3 } from '@app/_components/cards';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import Avatar from '@mui/material/Avatar';
import { ScheduleList } from './components';

function ScheduleCard() {
  return (
    <FeaturedCard3
      bgcolor={['#843CF6', '#38B8F2']}
      textColor='common.white'
      action={
        <JumboDdMenu
          menuItems={[{ title: 'Setup a call' }, { title: 'Schedule a task' }]}
        />
      }
      avatar={
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
      }
      title='Monday'
      subheader='December 2023'
    >
      <ScheduleList />
    </FeaturedCard3>
  );
}

export { ScheduleCard };
