import React from "react";
import { enUS } from "@mui/material/locale";
import { JumboThemeHeaderContextType } from "@jumbo/types";


const defaultContextValue: JumboThemeHeaderContextType = { 
    headerTheme: {},
    setHeaderTheme: () => null,
};

const JumboThemeHeaderContext = React.createContext(defaultContextValue);

export default JumboThemeHeaderContext;