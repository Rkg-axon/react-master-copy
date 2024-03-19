import { View } from '@app/_components/_core/View';
import {
  ProjectItem,
  ProjectType,
  projects,
} from '@app/_components/views/list/Projects';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ProjectsList = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <Typography variant={'h2'} mb={3}>
        {t('views.title.projects')}
      </Typography>
      <View<ProjectType>
        variant='list'
        dataSource={projects}
        renderItem={ProjectItem}
      />
    </React.Fragment>
  );
};

export default ProjectsList;
