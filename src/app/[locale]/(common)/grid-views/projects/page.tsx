import { View } from '@app/_components/_core/View';
import {
  ProjectItem,
  ProjectType,
  projects,
} from '@app/_components/views/grid/Projects';
import { users } from '@app/_components/views/grid/Users/data';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ProjectsList = () => {
  const t = useTranslations();
  return (
    users.length > 0 && (
      <React.Fragment>
        <Typography variant={'h2'} mb={3}>
          {t('views.title.projects')}
        </Typography>
        <View<ProjectType>
          variant='grid'
          dataSource={projects}
          renderItem={ProjectItem}
        />
      </React.Fragment>
    )
  );
};

export default ProjectsList;
