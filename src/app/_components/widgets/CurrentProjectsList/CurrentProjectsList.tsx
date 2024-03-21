'use client';
import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { Chip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ProjectsList } from './components/ProjectsList';

const CurrentProjectsList = ({ scrollHeight }: { scrollHeight?: number }) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.currentProjects')}
      subheader={t('widgets.subheader.currentProjects')}
      action={<Chip color={'warning'} label={'This week'} size={'small'} />}
      headerSx={{ borderBottom: 1, borderBottomColor: 'divider' }}
      contentWrapper
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 356}
      >
        <ProjectsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { CurrentProjectsList };
