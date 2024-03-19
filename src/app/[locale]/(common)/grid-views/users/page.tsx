import { View } from '@app/_components/_core/View';
import { UserItem, UserProps, users } from '@app/_components/views/grid/Users';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const UsersList = () => {
  const t = useTranslations();
  return (
    users.length > 0 && (
      <React.Fragment>
        <Typography variant={'h2'} mb={3}>
          {t('views.title.users')}
        </Typography>
        <View<UserProps>
          variant='grid'
          dataSource={users}
          renderItem={UserItem}
        />
      </React.Fragment>
    )
  );
};

export default UsersList;
