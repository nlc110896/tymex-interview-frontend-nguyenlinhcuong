'use client';

import { Input, InputRef } from 'antd';
import React, { useRef } from 'react';
import commonStyles from '@/styles/modules/common.module.css';
import bodyStyles from '@/styles/modules/body.module.css';
import { debounce } from '@/utilities';
import BaseImage from '@/components/HOC/image';
import search from '@/assets/icon/search.svg';

interface ISearchProps {
  placeholder?: string;
  defaultValue?: string;
  onSearch: (text: string) => void;
}

export const Search: React.FC<ISearchProps> = ({
  placeholder = 'Quick search',
  defaultValue,
  onSearch,
}) => {
  const inputRef = useRef<InputRef>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceTextFn = React.useCallback(
    debounce((text: string) => onSearch(text), 1000),
    [onSearch]
  );

  const onSearchText = () => {
    const text = inputRef?.current?.input?.value ?? '';
    debounceTextFn(text);
  };

  return (
    <Input
      className={`${commonStyles.input} ${bodyStyles['search-input']}`}
      e2e-id="search-input"
      placeholder={placeholder}
      ref={inputRef}
      onKeyUp={onSearchText}
      defaultValue={defaultValue}
      prefix={
        <BaseImage
          style={{ width: 16, height: 16, marginRight: 8 }}
          src={search}
          alt="search icon"
        />
      }
    />
  );
};
