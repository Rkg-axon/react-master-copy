'use client';
import { Icon } from '@jumbo/components/Icon';
import { ListItemIcon, ListItemText, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { generalInfo } from '../../data';

const GeneralInfo = () => {
  return (
    <React.Fragment>
      <Typography variant={'h5'}>You Have</Typography>
      <List>
        {generalInfo.map((item, index) => {
          return (
            <ListItemButton
              key={index}
              sx={{
                px: 0,
                py: 0.25,

                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Icon name={item.icon} sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText primary={<Typography>{item.title}</Typography>} />
            </ListItemButton>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export { GeneralInfo };
