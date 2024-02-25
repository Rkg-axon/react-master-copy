import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { Card, CardHeader, List, Typography } from '@mui/material';

import { IconLabelListItem } from '@app/_components/_core';
import { Div } from '@jumbo/shared';
import { useTranslations } from 'next-intl';
import { SocialMediaButtons } from './components';
import { branches } from './data';

const OurOffice1 = () => {
  const t = useTranslations();
  const activeBranch = branches[0];
  return (
    <Card sx={{ pb: 0 }}>
      <CardHeader
        title={
          <Typography fontWeight={'500'} variant={'h3'}>
            {t('widgets.title.ourOffice1')}
          </Typography>
        }
      />
      <Div>
        <List disablePadding>
          <IconLabelListItem
            alignItems='flex-start'
            icon={<LocationOnIcon />}
            text={activeBranch.address}
          />
          <IconLabelListItem icon={<PhoneIcon />} text={activeBranch.phone} />
          <IconLabelListItem
            icon={<MailOutlineIcon />}
            text={activeBranch.email}
          />
        </List>
        <SocialMediaButtons />
      </Div>
    </Card>
  );
};

export { OurOffice1 };
