'use client';
import { Div } from '@jumbo/shared';
import { SxProps, Theme } from '@mui/material';
import React from 'react';

type NumberFunction = () => number;

type JumboScrollbarProps = {
  direction?: 'horizontal' | 'vertical';
  disable?: boolean;
  height?: number | 'auto' | NumberFunction;
  width?: number | 'auto' | NumberFunction;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

function JumboScrollbar({
  disable = false,
  height = 'auto',
  children,
  sx = {},
}: JumboScrollbarProps) {
  const [showScrollbar, setShowScrollbar] = React.useState(false);

  if (disable) {
    return children;
  }

  let calcHeight: string;

  if (typeof height === 'number') {
    calcHeight = `${height}px`;
  } else if (typeof height === 'function') {
    calcHeight = `${height()}px`;
  } else if (height === 'auto') {
    calcHeight = '100px';
  } else {
    calcHeight = height;
  }

  const calculatedSx: SxProps<Theme> = {
    ...sx,
    height: calcHeight,
    overflowY: showScrollbar ? 'scroll' : 'visible',
  };

  function handleScrollbarVisibility(value: boolean) {
    setShowScrollbar(value);
  }

  return (
    <Div
      onMouseEnter={() => handleScrollbarVisibility(true)}
      onMouseLeave={() => handleScrollbarVisibility(false)}
      sx={{ ...calculatedSx }}
    >
      {children}
    </Div>
  );
}

export { JumboScrollbar };
