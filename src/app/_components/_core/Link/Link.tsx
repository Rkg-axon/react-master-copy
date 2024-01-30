'use client';
import { Link as MuiLink } from '@mui/material';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales, pathnames } from './locale-config';
const {
  Link: NextIntlLink,
  redirect,
  usePathname,
  useRouter,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});

function Link(props: any) {
  return <MuiLink component={NextIntlLink} {...props} />;
}

export { Link, redirect, usePathname, useRouter };
