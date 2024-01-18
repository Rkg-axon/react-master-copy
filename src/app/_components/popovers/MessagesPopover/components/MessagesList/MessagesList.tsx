import React from 'react';
import List from "@mui/material/List";
import MessageItem from "./MessageItem";
import { messagesData } from './data';

const MessagesList = () => {
    return (
        <List disablePadding>
            {
                messagesData?.map((item, index) => {
                    return (
                        <MessageItem key={index} item={item}/>
                    )
                })
            }
        </List>
    );
};

export {MessagesList};
