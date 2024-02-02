import { Div } from '@jumbo/shared';
import { BackdropProps, BgStyleProps } from '@jumbo/types';
import { getBgStyle } from '@jumbo/utilities/styleHelpers';
import { Card, Stack, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { JumboBackdrop } from '../JumboBackdrop';

type JumboFeaturedProps = BgStyleProps &
  BackdropProps & {
    tick?: React.ReactNode;
    tickSx?: SxProps<Theme>;
    direction: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    spacing?: number | string | number[] | string[];
    showTick?: boolean;
    imgSrc?: string;
    imgAlt?: string;
    imgSx?: SxProps<Theme>;
    imgFit?: boolean;
    sx?: SxProps<Theme>;
    stackSx?: SxProps<Theme>;
    children?: React.ReactNode;
    imgHeight?: number | undefined;
    imgWidth?: number | undefined;
  };
function JumboFeaturedCard({
  tick,
  tickSx,
  direction,
  spacing,
  showTick,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  imgSx,
  imgFit,
  backdrop,
  backdropOpacity,
  backdropColor,
  bgColor,
  bgImage,
  bgGradientDir,
  stackSx,
  children,
  sx,
}: JumboFeaturedProps) {
  const bgStyle = getBgStyle({ bgColor, bgImage, bgGradientDir });

  const tickAlign = ['column', 'column-reverse'].includes(direction!)
    ? { m: '0 auto 16px' }
    : {};

  return (
    <Card sx={{ ...bgStyle, position: 'relative', ...sx }}>
      <JumboBackdrop
        color={backdropColor}
        opacity={backdropOpacity}
        open={backdrop}
      />
      <Stack direction={direction} spacing={spacing} sx={stackSx}>
        <Div sx={{ p: 3 }}>
          {showTick &&
            (tick ? (
              tick
            ) : (
              <Div
                sx={{
                  width: 24,
                  height: 4,
                  bgcolor: 'grey.500',
                  borderRadius: 4,
                  ...tickAlign,
                  ...tickSx,
                }}
              />
            ))}
          {children}
        </Div>
        {imgSrc && (
          <Div
            sx={{
              position: 'relative',
              overflow: 'hidden',
              height: 175,
              '& > img': {
                ...(imgFit
                  ? {
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      objectPosition: 'center',
                    }
                  : {}),
              },
              ...imgSx,
            }}
          >
            <Image
              src={imgSrc}
              alt={imgAlt ?? 'Picture of a author'}
              width={imgWidth}
              height={imgHeight}
              fill={!(imgWidth && imgHeight) && true}
            />
            {/* <Image
              imgSrc={imgSrc}
              imgHeight={imgHeight!}
              imgWidth={imgWidth!}
              imgAlt={imgAlt ?? 'Picture of the author'}
              imgQuality={1}
            /> */}
          </Div>
        )}
      </Stack>
    </Card>
  );
}

export { JumboFeaturedCard };
