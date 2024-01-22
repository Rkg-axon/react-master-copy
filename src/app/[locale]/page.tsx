import { Box, Button, SxProps, Theme } from '@mui/material';
import { useTranslations } from 'next-intl';

const sxProps: SxProps<Theme> = {
  width: 500,
  bgcolor: 'red',
};
export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('Index.title')}</h1>
      <Box sx={{ ...sxProps }}>Hi</Box>
      <Button variant='contained'>Welcome back jumbo!</Button>
    </main>
  );
}
