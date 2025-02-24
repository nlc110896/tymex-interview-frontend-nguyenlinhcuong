'use client';

import categories from '@/data/categories.json';
import { Tabs } from 'antd';
import { useChangeParam } from '@/hook/useChangeParam';
import BaseImage from '@/components/HOC/image';
import dropdownPink from '@/assets/icon/dropdown-pink.svg';

export const SubFilter = () => {
  const { onChangeParam, getParam } = useChangeParam();

  const onChangeCategory = (value: string) => {
    onChangeParam('category', value);
  };

  return (
    <Tabs
      className="sub-filter"
      defaultActiveKey={getParam('category') ?? ''}
      tabPosition="top"
      items={categories.map((category) => {
        return {
          label: category.label,
          key: category.value,
        };
      })}
      onChange={onChangeCategory}
      moreIcon={
        <BaseImage
          style={{ width: 18, height: 11 }}
          src={dropdownPink}
          alt="dropdown-pink icon"
        />
      }
    />
  );
};
