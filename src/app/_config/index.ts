import { locales } from '@app/_components/_core/Link/locale-config';
// import { footerTheme } from '@app/_themes/footer/default';
// import { headerTheme } from '@app/_themes/header/default';
import { mainTheme } from '@app/_themes/main/default';
// import { sidebarTheme } from '@app/_themes/sidebar/default';
import { JumboThemeConfig } from '@jumbo/types';
import { createJumboTheme } from '@jumbo/utilities/helpers';

export const CONFIG: {
  THEME: JumboThemeConfig;
  LOCALES: typeof locales;
} = {
  THEME: createJumboTheme(mainTheme),
  LOCALES: locales,
};
