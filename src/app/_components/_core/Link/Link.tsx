import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales, pathnames } from './locale-config';

export const {
  Link: NextIntlLink,
  redirect,
  usePathname,
  useRouter,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});
