import React from 'react';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {ThemeProvider} from "@mui/material";
import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';
import { JumboIconButton } from '@jumbo/components';


const MessagesTriggerButton = () => {
    const {headerTheme} = useJumboHeaderTheme();
    return (
        <ThemeProvider theme={headerTheme}>
            <JumboIconButton badge={{variant: "dot"}} elevation={25}>
                <ChatBubbleOutlineOutlinedIcon sx={{fontSize: '1rem'}}/>
            </JumboIconButton>
        </ThemeProvider>
    );
};

export {MessagesTriggerButton};
