import { FeaturedCard3 } from '@app/_components/cards';
import { ChartAppUsers } from '@app/_components/charts';
import { useTranslations } from 'next-intl';

const AppUsers = () => {
  const t = useTranslations();
  return (
    <FeaturedCard3
      title={t('widgets.title.appUsers')}
      subheader={t('widgets.subheader.appUsers')}
      contentSx={{ pt: 0, bgcolor: '#fff' }}
    >
      <ChartAppUsers />
    </FeaturedCard3>
  );
};

export { AppUsers };
