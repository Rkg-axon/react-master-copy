import { FeaturedCard2 } from '@app/_components/cards/FeaturedCard2/FeaturedCard2';
import { Avatar } from '@mui/material';
import { useTranslations } from 'next-intl';

function UserSummary() {
  const t = useTranslations();
  return (
    <FeaturedCard2
      avatar={
        <Avatar
          sx={{
            width: 60,
            height: 60,
            boxShadow: 2,
            position: 'relative',
          }}
          src={`/assets/images/avatar/avatar7.jpg`}
          alt={''}
        />
      }
      title={t('widgets.title.userSummary')}
      subheader={t('widgets.subheader.userSummary')}
      bgcolor={['135deg', '#00C4B4']}
    />
  );
}

export { UserSummary };
