'use client';

import React from 'react';
import headerStyles from '@/styles/modules/header.module.css';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { Box } from '@/components/HOC/box';

const Header = () => {
  return (
    <header>
      <Box className={`container ${headerStyles.header}`}>
        <LeftSide />
        <RightSide />
      </Box>
    </header>
  );
};

export default Header;
