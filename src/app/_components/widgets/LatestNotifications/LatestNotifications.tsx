'use client';
import { JumboScrollbar } from '@jumbo/components/JumboScrollbar';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  Link,
  Tab,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FeedsList, InvitationsList, MessagesList } from './components';
import { latestNotifications } from './data';

const NotificationListComponents = {
  MESSAGES: MessagesList,
  FEEDS: FeedsList,
  INVITATIONS: InvitationsList,
};

function LatestNotifications() {
  const t = useTranslations();
  const [value, setValue] = React.useState('notification');
  return (
    <Card>
      <CardHeader
        title={t('widgets.title.latestNotifications')}
        action={<Chip size={'small'} label={'2 New'} color={'secondary'} />}
      />
      <TabContext value={value}>
        <TabList
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <Tab
            label={'App Notifications'}
            value={'notification'}
            sx={{ flex: '1 1 auto' }}
          />
          <Tab label={'Feeds'} value={'feed'} sx={{ flex: '1 1 auto' }} />
        </TabList>
        <TabPanel value='notification' sx={{ p: 0 }}>
          <JumboScrollbar height={200}>
            {latestNotifications.map((notificationGroupType, index) => {
              const GroupTypeComponent =
                NotificationListComponents[`${notificationGroupType.type}`];
              return (
                <GroupTypeComponent
                  key={index}
                  notifications={notificationGroupType.records}
                  count={notificationGroupType.total}
                  noHeader={true}
                />
              );
            })}
          </JumboScrollbar>
        </TabPanel>
        <TabPanel value='feed' sx={{ p: 0 }}>
          <JumboScrollbar height={452}>
            <FeedsList
              notifications={latestNotifications[2].records}
              count={latestNotifications[2].total}
              noHeader={true}
            />
          </JumboScrollbar>
        </TabPanel>
      </TabContext>
      <Divider />
      <CardActions sx={{ py: (theme) => theme.spacing(1.5) }}>
        <Link href={'#/'} underline={'none'} lineHeight={1.2}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}

export { LatestNotifications };
