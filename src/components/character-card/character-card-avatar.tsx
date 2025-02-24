import bodyStyles from '@/styles/modules/body.module.css';
import { getCardImage, getGradient } from '@/utilities';
import BaseImage from '@/components/HOC/image';
import { Space } from 'antd';
import { Box } from '@/components/HOC/box';
import love from '@/assets/icon/love.svg';
import dislove from '@/assets/icon/dislove.svg';

export const CharacterCardAvatar = (props: {
  id: number;
  imageId: number;
  category: string;
  isFavorite: boolean;
}) => {
  const { id, imageId, category, isFavorite } = props;

  return (
    <Space
      direction="vertical"
      style={{ background: getGradient(category) }}
      className={bodyStyles['character-card-avatar']}
    >
      <Box className={bodyStyles['character-card-avatar-header']}>
        <Box className={bodyStyles['card-category']}>{category}</Box>
        <Box className={bodyStyles.love}>
          <BaseImage src={isFavorite ? love : dislove} alt="favorite icon" />
        </Box>
      </Box>
      <Box className={bodyStyles.avatar}>
        <BaseImage src={getCardImage(imageId)} alt={`${id} ${category}`} />
      </Box>
    </Space>
  );
};
