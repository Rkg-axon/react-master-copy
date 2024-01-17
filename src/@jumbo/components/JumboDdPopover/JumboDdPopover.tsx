'use client';
import Popover from '@mui/material/Popover';
import React from 'react';

type JumboDdPopoverProps = {
  children: React.ReactNode;
  triggerButton: React.ReactNode;
};

const JumboDdPopover = ({ triggerButton, children }: JumboDdPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const isOpen = Boolean(anchorEl);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <span onClick={handleClick}>{triggerButton}</span>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          mt: 2,
          mr: 6,
        }}
      >
        {children}
      </Popover>
    </>
  );
};

export { JumboDdPopover };
