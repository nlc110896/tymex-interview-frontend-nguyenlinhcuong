import React from 'react';
import { Box } from '@/components/HOC/box';
import footerStyles from '@/styles/modules/footer.module.css';

export const ContactGroup = (props: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) => {
  const { href, label, icon } = props;

  return (
    <Box className={footerStyles['contact-group']}>
      <Box
        style={{
          width: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          marginRight: '0.8rem',
        }}
      >
        {icon}
      </Box>
      <a href={href}>{label}</a>
    </Box>
  );
};
