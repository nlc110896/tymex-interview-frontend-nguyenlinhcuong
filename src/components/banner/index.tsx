'use client';

import React from 'react';
import styles from '@/styles/modules/information.module.css';
import informationStyles from '@/styles/modules/information.module.css';
import BaseImage from '@/components/HOC/image';
import { Box } from '@/components/HOC/box';
import MainCharactersBanner from '@/assets/icon/characters-banner.svg';

export const Banner = () => {
  return (
    <Box className={styles.main}>
      <Box style={{ background: '#000000b3', position: 'relative' }}>
        <Box className={informationStyles['characters-banner']}>
          <BaseImage src={MainCharactersBanner} alt="characters banner" />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
