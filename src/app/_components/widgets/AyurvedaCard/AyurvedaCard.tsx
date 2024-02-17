import { JumboCardFeatured } from '@jumbo/components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function AyurvedaCard() {
  return (
    <JumboCardFeatured
      separatorSx={{ bgcolor: 'success.main' }}
      direction={'column'}
      contentWrapperProps={{ textAlign: 'center' }}
      fitToWidth={true}
      image={<Image src={`/dashboard/ayurveda.jpg`} alt='Ayurveda' />}
    >
      <Typography variant={'h4'} mb={2}>
        Ayurveda
      </Typography>
      <Typography mb={3}>
        Learn with experts from around the world. Some description about the
        card can be found below.
      </Typography>
      <Button variant={'contained'}>Learn More</Button>
    </JumboCardFeatured>
  );
}
/* Todo height prop define */
export default AyurvedaCard;
