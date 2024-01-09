import { ThemeOptions } from "@mui/material";

interface JumboThemeOptions extends ThemeOptions {
    jumboComponents?: {
        JumboSearch?: {
            background?: string,
        }
    }
}

interface JumboThemeConfig {
    main: JumboThemeExtended,
    header?: JumboThemeExtended,
    sidebar?: JumboThemeExtended,
    footer?: JumboThemeExtended,
};

export {JumboThemeConfig, JumboThemeOptions};