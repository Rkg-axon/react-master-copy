import { Div } from '@jumbo/shared';
import { SxProps, Theme } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'next/image';

type LogoProps = {
  mini: boolean;
  mode: 'light' | 'dark';
  sx: SxProps<Theme>;
};
const Logo = ({ mini, mode, sx }: LogoProps) => {
  return (
    <Div sx={{ display: 'inline-flex', ...sx }}>
      <Link href={'/dashboards/misc'}>
        {!mini ? (
          <Image
            src={
              mode === 'light'
                ? `/assets/images/logo.png`
                : `/assets/images/logo-white.png`
            }
            alt='Jumbo React'
          />
        ) : (
          <Image
            src={
              mode === 'light'
                ? `/assets/images/logo-short.png`
                : `/assets/images/logo-short-white.png`
            }
            alt='Jumbo React'
          />
        )}
      </Link>
    </Div>
  );
};

Logo.defaultProps = {
  mode: 'light',
  mini: false,
};

export { Logo };
