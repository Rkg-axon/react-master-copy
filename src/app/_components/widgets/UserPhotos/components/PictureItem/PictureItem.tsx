import { ImageListItemBar } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import { UserPhotoType } from '../../data';

const PictureItem = ({ item }: { item: UserPhotoType }) => {
  return (
    <ImageListItem
      key={item.photo_url}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',

        '& .MuiImageListItemBar-root': {
          transition: 'all 0.3s ease',
          transform: 'translateY(100%)',
        },

        '&:hover .MuiImageListItemBar-root': {
          transform: 'translateY(0)',
        },
      }}
    >
      <img
        src={`${item.photo_url}?w=248&fit=crop&auto=format`}
        srcSet={`${item.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.caption}
        loading='lazy'
      />
      <ImageListItemBar title={item.caption} subtitle={item.size} />
    </ImageListItem>
  );
};

export { PictureItem };
