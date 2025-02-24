import { Card } from 'antd';
import React from 'react';
import bodyStyles from '@/styles/modules/body.module.css';
import { ICardDetail } from '@/common';
import { CharacterCardAvatar } from './character-card-avatar';
import CharacterCardDetail from './character-card-information';

export const CharacterCard: React.FC<{
  characterData: ICardDetail;
  loading?: boolean;
}> = ({ characterData, loading = false }) => {
  const {
    id,
    title: name,
    author,
    imageId,
    price,
    category,
    isFavorite,
  } = characterData;

  return (
    <Card loading={loading} className={bodyStyles['character-card']} hoverable>
      <CharacterCardAvatar
        id={id}
        imageId={imageId}
        category={category}
        isFavorite={isFavorite}
      />
      <CharacterCardDetail name={name} price={price} author={author} />
    </Card>
  );
};
