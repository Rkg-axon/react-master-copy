import { Div } from '@jumbo/shared';
import { JumboCardFeaturedProps } from '@jumbo/types/JumboCardFeatured';
import { getBgStyle } from '@jumbo/utilities/styleHelpers';
import { Card, Stack } from '@mui/material';
import { JumboBackdrop } from '../JumboBackdrop';

function JumboCardFeatured({
  direction = 'column',
  separator = true,
  separatorSx = {},
  spacing = 1,
  background,
  backdrop,
  children,
  sx = {},
  contentWrapperProps = {},
  image,
  imageWrapperSx = {},
  fitToWidth = true,
}: JumboCardFeaturedProps) {
  const bgStyle = getBgStyle(background);

  const tickAlign = ['column', 'column-reverse'].includes(direction)
    ? { m: '0 auto 16px' }
    : {};

  return (
    <Card sx={{ ...bgStyle, position: 'relative', ...sx }}>
      <JumboBackdrop
        color={backdrop?.color}
        opacity={backdrop?.opacity}
        open={!!backdrop}
      />
      <Stack direction={direction} spacing={spacing} {...contentWrapperProps}>
        <Div sx={{ p: 3 }}>
          {separator && (
            <Div
              sx={{
                width: 24,
                height: 4,
                bgcolor: 'grey.500',
                borderRadius: 4,
                ...tickAlign,
                ...separatorSx,
              }}
            />
          )}
          {children}
        </Div>
        {image && (
          <Div
            sx={{
              height: 175,
              ...imageWrapperSx,
              position: 'relative',
              overflow: 'hidden',
              '& > img': {
                ...(fitToWidth && {
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  objectPosition: 'center',
                }),
              },
            }}
          >
            {image}
          </Div>
        )}
      </Stack>
    </Card>
  );
}

export { JumboCardFeatured };
