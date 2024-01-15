import { JumboThemeConfig, JumboThemeOptions } from '@jumbo/types';
export const createJumboTheme = (
  mainTheme: JumboThemeOptions,
  headerTheme: JumboThemeOptions,
  sidebarTheme: JumboThemeOptions,
  footerTheme: JumboThemeOptions
) => {
  const theme: JumboThemeConfig = {
    main: mainTheme,
    header: {
      ...mainTheme,
      ...(headerTheme ?? {}),
    },
    sidebar: {
      ...mainTheme,
      ...(sidebarTheme ?? {}),
    },
    footer: {
      ...mainTheme,
      ...(footerTheme ?? {}),
    },
  };
  return theme;
};

// export function updatedObject<Type>(object: Type, excludeProps: string[] = []) {
//   let newSxProps: Type;
//   let objectKeys = Object.keys([object]);
//   objectKeys.map((key: string) => {
//     if(!excludeProps.includes(key)) {
//       newSxProps[key] = object[key]
//     }
//   })
//   return newSxProps;
// }
