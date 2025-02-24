'use client';

import React from 'react';
import BaseImage from '@/components/HOC/image';
import { Box } from '@/components/HOC/box';
import footerBanner from '@/assets/icon/pre-footer-bg.svg';

export const PreFooterBackground = () => {
  return (
    <Box style={{ marginTop: '2rem' }}>
      <BaseImage
        style={{ width: '100%', height: '100%', backgroundPosition: 'center' }}
        src={footerBanner}
        alt="pre footer background"
      />
    </Box>
  );
};
