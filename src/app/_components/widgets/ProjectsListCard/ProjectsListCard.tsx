import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { useTranslations } from 'next-intl';
import ProjectList from './components/ProjectsList/ProjectsList';
import { projects } from './data';

const ProjectsListCard = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.projectsList')}
      contentSx={{ p: 0 }}
      contentWrapper
    >
      <JumboScrollbar autoHeight autoHeightMin={392}>
        <ProjectList data={projects} />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { ProjectsListCard };
