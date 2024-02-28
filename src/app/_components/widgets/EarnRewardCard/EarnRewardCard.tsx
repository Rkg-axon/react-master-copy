import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { JumboCardFeatured } from '@jumbo/components';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const EarnRewardCard = () => {
  return (
    <JumboCardFeatured
      separatorSx={{ bgcolor: 'warning.main' }}
      bgcolor={['#38B8F2', '#843CF6']}
      direction={'column'}
      image={
        <Image
          src={`${ASSET_IMAGES}/widgets/undraw_digital_currency_qpak.svg`}
          alt='digital currency'
          height={218}
          width={300}
        />
      }
      fitToWidth
    >
      <Stack alignItems={'center'} spacing={3} textAlign={'center'}>
        <Typography variant={'h3'} color={'common.white'} mb={2}>
          {`earn from $10 to $200 from your friend's payment`}
        </Typography>
        <Button variant={'contained'} color={'warning'} sx={{ mb: 0.5 }}>
          Learn More
        </Button>
      </Stack>
    </JumboCardFeatured>
  );
};

export { EarnRewardCard };
