import React from "react";
import {JumboThemeOptions} from "./JumboThemeConfig";
import { Localization } from "@mui/material/locale";

interface JumboThemeContextType {
    theme: JumboThemeOptions,
    setTheme: (options: JumboThemeOptions) => void,
    muiLocale?: Localization,    
    setMuiLocale?: React.Dispatch<React.SetStateAction<Localization>>
}

interface JumboThemeHeaderContextType {
    headerTheme: JumboThemeOptions,
    setHeaderTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>
}

interface JumboThemeFooterContextType {
    footerTheme: JumboThemeOptions,
    setFooterTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>
}

interface JumboThemeSidebarContextType {
    sidebarTheme: JumboThemeOptions,
    setSidebarTheme: React.Dispatch<React.SetStateAction<JumboThemeOptions>>
}

export {
    JumboThemeContextType,
    JumboThemeFooterContextType,
    JumboThemeHeaderContextType,
    JumboThemeSidebarContextType
};