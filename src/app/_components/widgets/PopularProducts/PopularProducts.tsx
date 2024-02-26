import { CardActions, List } from '@mui/material';
import Button from '@mui/material/Button';

import { JumboCard } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { useTranslations } from 'next-intl';
import { Product } from './components';
import { menuItems, productsData } from './data';

const PopularProducts = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.popularProducts')}
      subheader={t('widgets.subheader.popularProducts')}
      action={<JumboDdMenu menuItems={menuItems} />}
    >
      <List
        disablePadding
        sx={{
          display: 'flex',
          minWidth: 0,
          flexWrap: 'wrap',
        }}
      >
        {productsData.map((item, key) => (
          <Product key={key} product={item} />
        ))}
      </List>
      <CardActions sx={{ pt: 0 }}>
        <Button variant={'text'}>View all</Button>
      </CardActions>
    </JumboCard>
  );
};

export { PopularProducts };
