import { ThemeOptions } from "@mui/material";

interface JumboThemeOptions extends ThemeOptions {
    jumboComponents?: {
        JumboSearch?: {
            background?: string,
        }
    }
}

interface JumboThemeConfig {
    main: JumboThemeOptions,
    header?: JumboThemeOptions,
    sidebar?: JumboThemeOptions,
    footer?: JumboThemeOptions,
};

export {JumboThemeConfig, JumboThemeOptions};