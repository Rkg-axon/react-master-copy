import React from 'react';
import Typography from "@mui/material/Typography";
import { useTranslations } from 'next-intl';
import { SimpleRadialChart } from '@app/_components/charts/radial';

const RadialChart = () => {
    const t = useTranslations();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('modules.title.radialChart')}</Typography>
            <SimpleRadialChart/>
        </React.Fragment>
    );
};

export default RadialChart;
