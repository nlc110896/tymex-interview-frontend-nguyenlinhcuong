import { Avatar } from 'antd';
import { IAuthor } from '@/common';
import BaseImage from '@/components/HOC/image';
import { UserOutlined } from '@ant-design/icons';
import bodyStyles from '@/styles/modules/body.module.css';
import { Box } from '@/components/HOC/box';
import { getAuthorStatusImage } from '@/utilities';

export const AuthorAvatar = (props: { author: IAuthor; name: string }) => {
  const { author, name } = props;

  return (
    <Box className={bodyStyles['character-information-author-avatar']}>
      <Avatar
        icon={
          author?.avatar ? (
            <BaseImage
              style={{ width: 32, height: 32 }}
              src={author?.avatar}
              alt={name}
            />
          ) : (
            <UserOutlined />
          )
        }
      />
      <Box className={bodyStyles['character-information-author-verify']}>
        <BaseImage
          style={{ width: 12, height: 12 }}
          src={getAuthorStatusImage(author?.onlineStatus)}
          alt={name}
        />
      </Box>
    </Box>
  );
};
