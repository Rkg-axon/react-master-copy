import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { useTranslations } from 'next-intl';
import { Customer } from './components';

const NewCustomers = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.newCustomer')}
      contentWrapper
      contentSx={{ px: 3, pb: 3, pt: 2 }}
    >
      <Div sx={{ display: 'flex', pb: '2px' }}>
        <Customer />
      </Div>
    </JumboCard>
  );
};

export default NewCustomers;
