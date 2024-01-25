import { PaletteOptions, ThemeOptions } from '@mui/material';

interface JumboThemeOptions extends ThemeOptions {
  jumboComponents?: {
    JumboSearch?: {
      background?: string;
    };
  };
  palette: PaletteOptions & {
    nav?: {
      action?: {
        active?: string;
        hover?: string;
      };
      background?: {
        active?: string;
        hover?: string;
      };
      tick?: {
        active?: string;
        hover?: string;
      };
    };
  };
  type: 'light' | 'dark';
}

type JumboThemeSidebarOptions = JumboThemeOptions & {
  bgimage?: string;
  overlay?: {
    bgcolor: string;
    bgimage: string;
    opacity: number;
  };
};

interface JumboThemeConfig {
  main: JumboThemeOptions;
  header?: JumboThemeOptions;
  sidebar?: JumboThemeSidebarOptions;
  footer?: JumboThemeOptions;
}

export {
  type JumboThemeConfig,
  type JumboThemeOptions,
  type JumboThemeSidebarOptions,
};
