import { JumboBackdrop } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { JumboContentProps } from '@jumbo/types';
import { getBgStyle } from '@jumbo/utilities/styleHelpers';

function JumboContent({
  backdrop,
  backdropColor,
  backdropOpacity,
  bgColor,
  bgImage,
  bgGradientDir,
  sx,
  children,
}: JumboContentProps) {
  const bgStyle = getBgStyle({bgImage,bgGradientDir,bgColor});
  return (
    <Div sx={{ ...sx, position: 'relative', ...bgStyle }}>
      <JumboBackdrop
        color={backdropColor}
        opacity={backdropOpacity}
        open={backdrop}
      />
      <Div sx={{ zIndex: 2, position: 'relative' }}>{children}</Div>
    </Div>
  );
}

export { JumboContent };
