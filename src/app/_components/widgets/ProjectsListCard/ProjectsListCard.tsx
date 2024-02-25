import { JumboCardNew, JumboScrollbar } from '@jumbo/components';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import ProjectList from './components/ProjectsList/ProjectsList';
import { projects } from './data';

const ProjectsListCard = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCardNew
      title={
        <Typography variant={'h4'} mb={0}>
          {t('widgets.title.projectsList')}
        </Typography>
      }
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar height={scrollHeight ?? 392}>
        <ProjectList data={projects} />
      </JumboScrollbar>
    </JumboCardNew>
  );
};

export { ProjectsListCard };
