'use client';

import commonStyles from '@/styles/modules/common.module.css';
import bodyStyles from '@/styles/modules/body.module.css';
import { Spin } from 'antd';
import { Box } from '@/components/HOC/box';

interface IViewMoreButtonProps {
  onLoadMore: () => void;
  loading?: boolean;
  isEndList?: boolean;
  hidden?: boolean;
}

export const ViewMoreButton: React.FC<IViewMoreButtonProps> = ({
  onLoadMore,
  loading,
  isEndList,
  hidden,
}) => {
  if (hidden) {
    return <></>;
  }

  if (isEndList) {
    return <Box className="font-16">End!</Box>;
  }

  return (
    <Box
      className={`font-16 ${commonStyles.button} ${bodyStyles['view-more-button']}`}
      onClick={onLoadMore}
    >
      {loading ? <Spin /> : 'View more'}
    </Box>
  );
};
