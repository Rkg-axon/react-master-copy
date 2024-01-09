import React from "react";
import {JumboThemeOptions} from "./types/JumboThemeConfig";

const defaultTheme: JumboThemeOptions = {};

const JumboThemeContext = React.createContext(defaultTheme);

export default JumboThemeContext;