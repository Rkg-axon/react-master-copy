import React from 'react';
import {Typography} from "@mui/material";
import { projectsListData } from '@app/_components/listViews/Projects/data';
import { ProjectListItem } from '@app/_components/listViews/Projects/components/ProjectListItem';
import { useTranslations } from 'next-intl';

const ProjectsListView = () => {
    const t = useTranslations();
    return (
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>{t("views.title.projects")}</Typography>
            {
                projectsListData.map((project, index) => (
                    <ProjectListItem item={project} key={index}/>
                ))
            }
        </React.Fragment>
    );
};

export default ProjectsListView;
