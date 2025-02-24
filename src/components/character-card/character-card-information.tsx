'use client';

import React from 'react';
import { DEFAULT_UNIT, IAuthor } from '@/common';
import BaseImage from '@/components/HOC/image';
import bodyStyles from '@/styles/modules/body.module.css';
import { Tooltip } from 'antd';
import { AuthorAvatar } from './author-avatar';
import { formatPrice } from '@/utilities';
import { Box } from '@/components/HOC/box';
import ethereum from '@/assets/icon/ethereum.svg';

const CharacterCardDetail = (props: {
  name: string;
  price: number;
  author: IAuthor;
}) => {
  const { name, price, author } = props;

  const authorName = React.useMemo(() => {
    return `${author.firstName} ${author.lastName}`;
  }, [author]);

  return (
    <Box className={bodyStyles['character-information']}>
      {/* Header */}
      <Box className={bodyStyles['character-information-header']}>
        <Box className={bodyStyles['character-information-name']}>
          <Tooltip placement="topLeft" title={name}>
            {name}
          </Tooltip>
        </Box>

        {/* Price */}
        <Box className={bodyStyles.cost}>
          <Box className={bodyStyles.unit}>
            <BaseImage src={ethereum} alt="ethereum icon" />
          </Box>
          <Tooltip
            placement="topLeft"
            title={`${formatPrice(price)} ${DEFAULT_UNIT}`}
            className={bodyStyles.price}
          >
            {formatPrice(price)}
          </Tooltip>{' '}
          <Box className="font-white">{DEFAULT_UNIT}</Box>
        </Box>
      </Box>

      {/* Author */}
      <Box className={bodyStyles['character-information-author']}>
        <AuthorAvatar author={author} name={authorName} />
        <Box className={bodyStyles['character-information-author-name']}>
          <Tooltip placement="topLeft" title={authorName}>
            {authorName}
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterCardDetail;
