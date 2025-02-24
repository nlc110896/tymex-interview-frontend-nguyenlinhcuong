'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

const BaseImage = (props: ImageProps) => {
  return (
    <Image
      placeholder="blur"
      blurDataURL="/loading.gif"
      width={1000}
      height={1000}
      style={{ width: '100%', height: '100%' }}
      priority={false}
      {...props}
    />
  );
};

export default BaseImage;
