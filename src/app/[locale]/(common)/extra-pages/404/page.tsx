'use client';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { Div } from '@jumbo/shared';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';

const Error404 = () => {
  return (
    <Div
      sx={{
        flex: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: (theme) => theme.spacing(4),
      }}
    >
      <Div sx={{ display: 'inline-flex', mb: 3 }}>
        <img
          src={getAssetPath(
            `${ASSET_IMAGES}/apps/undraw_page_not_found.svg`,
            '380x206'
          )}
          alt='404'
          width={380}
        />
      </Div>
      <Typography
        align={'center'}
        component={'h2'}
        variant={'h1'}
        color={'text.secondary'}
        mb={3}
      >
        Oops, an error has occurred. Page not found!
      </Typography>
      <FormControl fullWidth variant='outlined' sx={{ maxWidth: 360, mb: 2 }}>
        <OutlinedInput
          id='outlined-search'
          type='search'
          placeholder='Search...'
          endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='Search' edge='end'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          sx={{ bgcolor: (theme) => theme.palette.background.paper }}
        />
      </FormControl>
      <Button variant='contained'>Go to home</Button>
    </Div>
  );
};

export default Error404;
