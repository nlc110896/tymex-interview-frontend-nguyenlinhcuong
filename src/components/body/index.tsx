'use client';

import React from 'react';
import bodyStyles from '@/styles/modules/body.module.css';
import { PreFooterBackground } from './pre-footer-background';
import { Col, Row } from 'antd';
import { SubFilter } from './sub-filter';
import { CharacterList } from './character-list';
import { Box } from '@/components/HOC/box';
import dynamic from 'next/dynamic';
const Filter = dynamic(() => import('./filter'), { ssr: false });

const Body = () => {
  return (
    <Box className={bodyStyles.main}>
      <Row className={`container ${bodyStyles.container}`}>
        <Col className={bodyStyles.filter}>
          <Filter />
        </Col>
        <Col className={bodyStyles['group-character-list']}>
          <SubFilter />
          <CharacterList />
        </Col>
      </Row>
      <PreFooterBackground />
    </Box>
  );
};

export default Body;
