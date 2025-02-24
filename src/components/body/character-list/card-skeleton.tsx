'use client';

// import { useSearchParams } from 'next/navigation';
import { DEFAULT_LIMIT } from '@/common';
import bodyStyles from '@/styles/modules/body.module.css';
import { Card, Row } from 'antd';

export const CardSkeleton = () => {
  return (
    <Row className={bodyStyles['character-list']}>
      {Array(DEFAULT_LIMIT)
        .fill(0)
        ?.map((_, index) => (
          <Card
            loading
            key={index}
            className={bodyStyles['character-card']}
            hoverable
          />
        ))}
    </Row>
  );
};
