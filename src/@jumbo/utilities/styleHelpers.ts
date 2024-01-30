import { BgStyleProps } from '@jumbo/types';

type ColorAction = {
  type: 'color' | 'gradient';
  value: string | string[];
};

type BgColorStyleProps = {
  colors: string | string[];
  gradientDir: string | undefined;
};

export const getColorObject = (color: string | string[]): ColorAction => {
  if (typeof color === 'string') {
    return {
      type: 'color',
      value: color,
    };
  }

  if (color.length === 1) {
    return {
      type: 'color',
      value: color,
    };
  }

  return {
    type: 'gradient',
    value: color,
  };
};

export const getBgColorStyle = ({ colors, gradientDir }: BgColorStyleProps) => {
  const colorObject = getColorObject(colors);
  if (!colorObject) return null;

  if (colorObject.type === 'color') {
    return { backgroundColor: colorObject.value };
  } else if (colorObject.type === 'gradient') {
    if (gradientDir)
      return {
        backgroundImage: `linear-gradient(${gradientDir}, ${
          Array.isArray(colorObject.value)
            ? colorObject.value.join()
            : colorObject.value
        })`,
      };
    return {
      backgroundImage: `linear-gradient(${
        Array.isArray(colorObject.value)
          ? colorObject.value.join()
          : colorObject.value
      })`,
    };
  }
};

export const getBgImageStyle = (imgSrc: string) => {
  return {
    background: `url(${imgSrc}) no-repeat center`,
    backgroundSize: 'cover',
  };
};

export const getBgStyle = ({
  bgImage,
  bgColor,
  bgGradientDir,
}: BgStyleProps) => {
  if (bgImage) {
    return getBgImageStyle(bgImage);
  } else if (bgColor) {
    return getBgColorStyle({ colors: bgColor, gradientDir: bgGradientDir });
  }
  return {};
};
