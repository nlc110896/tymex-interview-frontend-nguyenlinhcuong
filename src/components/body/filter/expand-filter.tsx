'use client';

import { Box } from '@/components/HOC/box';
import { FilterOutlined } from '@ant-design/icons';
import bodyStyles from '@/styles/modules/body.module.css';
import React from 'react';
import { Modal } from 'antd';
import { GroupSearch } from './group-search';
import { useChangeParam } from '@/hook/useChangeParam';
import { useSearchParams } from 'next/navigation';

export const ExpandFilter = () => {
  const { getParams } = useChangeParam();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const filterParamsCount = React.useMemo(() => {
    const params = getParams();
    delete params['page'];
    delete params['category'];
    delete params['text'];
    delete params['priceStart'];
    delete params['priceEnd'];

    return Object.keys(params).length;
  }, [searchParams]);

  return (
    <Box>
      <Box className={bodyStyles['filter-icon']} onClick={showModal}>
        <FilterOutlined style={{ fontSize: 32 }} />
        <Box className={bodyStyles['filter-count']}>{filterParamsCount}</Box>
      </Box>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <GroupSearch />
      </Modal>
    </Box>
  );
};
