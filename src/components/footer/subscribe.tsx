'use client';

import { Box } from '@/components/HOC/box';
import { droneFont } from '@/styles/font';
import commonStyles from '@/styles/modules/common.module.css';
import footerStyles from '@/styles/modules/footer.module.css';
import { Col, Input, Row, Space } from 'antd';

export const Subscribe = () => {
  return (
    <Space direction="vertical">
      <Box
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
      </Box>

      <Row style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <Col style={{ width: '100%' }}>
          <Input
            className={`${commonStyles.input} ${footerStyles.input}`}
            placeholder="Your email address"
          />
        </Col>
        <Col
          className={commonStyles.button}
          style={{ width: '10rem', height: '2.5rem', marginLeft: '1rem' }}
        >
          Subscribe
        </Col>
      </Row>
    </Space>
  );
};
