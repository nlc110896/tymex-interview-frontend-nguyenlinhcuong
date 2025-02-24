'use client';

import { Box } from '@/components/HOC/box';
import BaseImage from '@/components/HOC/image';
import { droneFont } from '@/styles/font';
import footerStyles from '@/styles/modules/footer.module.css';
import { Col, Row, Space } from 'antd';
import { ContactGroup } from './contact-group';
import phoneIcon from '@/assets/icon/phone.svg';
import messsageIcon from '@/assets/icon/message.svg';

export const ContactUs = () => {
  return (
    <Space direction="vertical">
      <Box
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        CONTACT US
      </Box>
      <Row gutter={50}>
        <Col className="font-16">
          <ContactGroup
            href="tel:01234568910"
            label="01234568910"
            icon={<BaseImage src={phoneIcon} alt="phone icon" />}
          />
          <ContactGroup
            href="mailto:tymex-talent@tyme.com"
            label="tymex-talent@tyme.com"
            icon={<BaseImage src={messsageIcon} alt="message icon" />}
          />
        </Col>
      </Row>
    </Space>
  );
};
