import { Box } from '@/components/HOC/box';
import footerStyles from '@/styles/modules/footer.module.css';
import { Col, Divider, Row } from 'antd';
import React from 'react';
import { ContactUs } from './contact-us';
import { CopyWriter } from './copywriter';
import { Navigation } from './navigation';
import { Subscribe } from './subscribe';

interface IFooterProps {
  className?: string;
}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer>
      <Box className="container">
        <Row className={footerStyles['pre-footer']}>
          <Col>
            <Navigation />
          </Col>
          <Col>
            <ContactUs />
          </Col>
          <Col>
            <Subscribe />
          </Col>
        </Row>

        <Divider style={{ marginTop: '2rem', marginBottom: '3rem' }} />

        <CopyWriter />
      </Box>
    </footer>
  );
};

export default Footer;
