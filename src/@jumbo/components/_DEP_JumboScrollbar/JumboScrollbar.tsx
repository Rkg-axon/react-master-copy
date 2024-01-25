'use client';
import React from 'react';
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars-2';
import { useJumboTheme } from '../JumboTheme/hooks';

type JumboScrollbarProps = ScrollbarProps & {
  direction?: 'horizontal' | 'vertical';
  disable?: boolean;
};

const JumboScrollbar = React.forwardRef<Scrollbars, JumboScrollbarProps>(
  function JumboScrollbarComponent(props: JumboScrollbarProps, ref) {
    const { theme } = useJumboTheme();
    const {
      direction,
      renderTrackVertical,
      renderTrackHorizontal,
      disable,
      ...restProps
    } = props;

    const scrollbarDirection = direction ?? 'vertical';
    const scrollbarDisable = disable ?? false;

    if (scrollbarDisable) {
      return restProps.children ?? null;
    }

    const renderTrackProp =
      scrollbarDirection === 'vertical'
        ? {
            renderTrackVertical: (props: React.HTMLProps<HTMLDivElement>) => {
              return (
                <div
                  style={{
                    ...props.style,
                    top: '2px',
                    bottom: '2px',
                    right: '2px',
                    borderRadius: '3px',
                    ...(theme.direction === 'rtl'
                      ? { right: 'auto', left: '2px' }
                      : {}),
                  }}
                  {...props}
                  className='track-vertical'
                />
              );
            },
          }
        : {
            renderTrackHorizontal: (props: React.HTMLProps<HTMLDivElement>) => {
              return (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    left: '50%',
                    width: '100px',
                    top: 0,
                    transform: 'translateX(-50%)',
                  }}
                  className='track-horizontal'
                />
              );
            },
          };

    return (
      <Scrollbars
        renderView={(props) => (
          <div
            {...props}
            style={
              theme.direction === 'rtl'
                ? {
                    ...props?.style,
                    marginLeft: '-17px',
                    marginRight: 0,
                  }
                : { ...props?.style }
            }
            className='view'
          />
        )}
        ref={ref}
        {...restProps}
        {...renderTrackProp}
      />
    );
  }
);
