'use client';

import { Box } from '@/components/HOC/box';
import BaseImage from '@/components/HOC/image';
import commonStyles from '@/styles/modules/common.module.css';
import headerStyles from '@/styles/modules/header.module.css';
import { Col, Dropdown, MenuProps, Row, Space } from 'antd';
import WorldIcon from '@/assets/icon/world-icon.svg';
import VectorIcon from '@/assets/icon/vector-icon.svg';

const items: MenuProps['items'] = [
  {
    key: '0',
    label: <Box className="font-black">Vietnamese</Box>,
  },
  {
    key: '1',
    label: <Box className="font-black">English</Box>,
  },
];

export const RightSide = () => {
  return (
    <Row className={headerStyles['right-side']}>
      <Col
        className={commonStyles.button}
        style={{ width: '10rem', height: '2.5rem', marginRight: '3rem' }}
      >
        Connect Wallet
      </Col>
      <Col>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <BaseImage
                style={{ width: 16, height: 16 }}
                src={WorldIcon}
                alt="world icon"
              />
              <BaseImage
                style={{ width: 16, height: 16 }}
                src={VectorIcon}
                alt="vector icon"
              />
            </Space>
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};
