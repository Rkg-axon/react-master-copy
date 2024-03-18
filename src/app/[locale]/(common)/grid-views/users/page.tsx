import { UserGridItem } from '@app/_components/gridViews/Users/components/UserGridItem';
import { usersGridData } from '@app/_components/gridViews/Users/data';
import { Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const UsersGridList = () => {
  const t = useTranslations();
  return (
    usersGridData.length > 0 && (
      <React.Fragment>
        <Typography variant={'h2'} mb={3}>
          {t('views.title.users')}
        </Typography>
        <Grid container spacing={3.75}>
          {usersGridData.map((user, index) => (
            <Grid item key={index} xs={12} sm={6} lg={4}>
              <UserGridItem user={user} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    )
  );
};

export default UsersGridList;
