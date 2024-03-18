import React from 'react';
import {Typography} from "@mui/material";
import { useTranslations } from 'next-intl';
import { usersListData } from '@app/_components/listViews/Users/data';
import { UserListItem } from '@app/_components/listViews/Users/components/UserListItem';

const UsersListView = () => {
    const t = useTranslations();
    return (
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>{t("views.title.users")}</Typography>
            {
                usersListData?.map((user, index) => (
                    <UserListItem user={user} key={index}/>
                ))
            }
        </React.Fragment>
    );
};

export default UsersListView;
