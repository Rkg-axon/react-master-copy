import React from 'react';
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import { projectsGridData } from '@app/_components/gridViews/Projects/data';
import { ProjectGridItem } from '@app/_components/gridViews/Projects/components/ProjectGridItem';
import { usersGridData } from '@app/_components/gridViews/Users/data';
import { useTranslations } from 'next-intl';

const ProjectsList = () => {
    const t = useTranslations();
    return (
        usersGridData.length > 0 &&
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>{t("views.title.projects")}</Typography>
            <Grid container spacing={3.75}>
                {
                    projectsGridData.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} lg={4}>
                            <ProjectGridItem item={project}/>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>
    );
};

export default ProjectsList;
