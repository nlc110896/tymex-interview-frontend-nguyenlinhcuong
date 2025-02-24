'use client';

import { droneFont } from '@/styles/font';
import headerStyles from '@/styles/modules/header.module.css';
import { MenuOutlined } from '@ant-design/icons';
import { Col, Drawer, Row } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useChangeParam } from '@/hook/useChangeParam';

const headers = [
  {
    key: 'home',
    label: 'HOME',
  },
  {
    key: 'about-us',
    label: 'ABOUT US',
  },
  {
    key: 'our-teams',
    label: 'OUR TEAMS',
  },
  {
    key: 'marketplace',
    label: 'MARKETPLACE',
  },
  {
    key: 'roadmap',
    label: 'ROADMAP',
  },
  {
    key: 'whitepaper',
    label: 'WHITEPAPER',
  },
];

export const LeftSide = () => {
  const router = useRouter();
  const { getParam } = useChangeParam();
  const page = getParam('page') || 'marketplace';
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const onChange = (page: string) => {
    router.push(`?page=${page}`, { scroll: false });
    closeDrawer();
  };

  return (
    <Row className={`${headerStyles['left-side']} ${droneFont.className}`}>
      {headers.map((header) => (
        <Col
          className={`font-white ${headerStyles['header-tabs']} ${page === header.key ? headerStyles.active : ''}`}
          onClick={() => onChange(header.key)}
          key={header.key}
        >
          {header.label}
        </Col>
      ))}

      <Col className={headerStyles.hamburger}>
        {!drawerVisible && <MenuOutlined onClick={showDrawer} />}

        <Drawer
          className={headerStyles.drawer}
          placement="left"
          closable={false}
          onClose={closeDrawer}
          open={drawerVisible}
          width={250}
        >
          {headers.map((header) => (
            <Row
              onClick={() => onChange(header.key)}
              className={`${headerStyles['drawer-text']} ${page === header.key ? headerStyles.active : ''}`}
              key={header.key}
            >
              {header.label}
            </Row>
          ))}
        </Drawer>
      </Col>
    </Row>
  );
};
