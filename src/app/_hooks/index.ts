import { useMediaQuery } from '@mui/material';

function useSmallScreen(): boolean {
  return useMediaQuery('(max-width:575px)');
}

export { useSmallScreen };
