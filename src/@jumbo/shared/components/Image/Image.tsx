'use client';
import NextImage from 'next/image';

type ImageProps = {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt?: string;
  imgQuality?: number;
};

export default function Image(props: ImageProps) {
  const { imgSrc, imgWidth, imgHeight, imgAlt, imgQuality } = props;
  const imageLoader = () => {
    return `https://res.cloudinary.com/ugwutotheeshoes/image/upload/bo_10px_solid_rgb:f78585,e_blur:290,b_rgb:e1e6e9,c_scale,r_10,h_280,w_450/v1632752254/eatery/item-8.jpg`;
  };
  return (
    <NextImage
      src={imgSrc}
      width={imgWidth}
      height={imgHeight}
      alt={imgAlt ?? 'Picture of an author'}
      loader={imageLoader}
      fill={!(imgWidth && imgHeight) && true}
      quality={imgQuality}
    />
  );
}
