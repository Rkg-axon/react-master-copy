import { JumboCardProps } from '@jumbo/types';
import { getBgStyle } from '@jumbo/utilities/styleHelpers';
import { Card, CardContent } from '@mui/material';
import { JumboBackdrop } from '../JumboBackdrop';

function JumboCard({
  bgColor,
  bgImage,
  bgGradientDir,
  noWrapper,
  wrapperSx,
  backdrop,
  backdropColor,
  backdropOpacity,
  sx,
  children,
}: JumboCardProps) {
  const bgStyle = getBgStyle({ bgColor, bgImage, bgGradientDir });
  return (
    <Card sx={{ ...bgStyle, position: 'relative', ...sx }}>
      <JumboBackdrop
        color={backdropColor}
        opacity={backdropOpacity}
        open={backdrop}
      />
      {noWrapper ? (
        children
      ) : (
        <CardContent sx={{ ...wrapperSx, zIndex: 2, position: 'relative' }}>
          {children}
        </CardContent>
      )}
    </Card>
  );
}

export { JumboCard };
