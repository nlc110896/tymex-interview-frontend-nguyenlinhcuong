'use client';

import { CharacterCard } from '@/components/character-card';
import React from 'react';
import { DEFAULT_LIMIT, ICardDetail } from '@/common';
import { notification, Row } from 'antd';
import bodyStyles from '@/styles/modules/body.module.css';
import { useChangeParam } from '@/hook/useChangeParam';
import { useSearchParams } from 'next/navigation';
import { CardSkeleton } from './card-skeleton';
import { ViewMoreButton } from './view-more-button';
import { Box } from '@/components/HOC/box';
import { Empty } from 'antd';

export const CharacterList = () => {
  const [characters, setCharacters] = React.useState<ICardDetail[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingViewMore, setIsLoadingViewMore] = React.useState(false);
  const [isEndList, setIsEndList] = React.useState(true);
  const { getParams } = useChangeParam();
  const searchParams = useSearchParams();
  const [api, contextHolder] = notification.useNotification();

  const getQueryObject = () => {
    const queryObject = getParams();
    delete queryObject['page'];

    const exceptQueryIsAll = ['tier', 'price', 'category', 'time', 'theme'];

    for (const query of exceptQueryIsAll) {
      if (queryObject[query] === 'all') {
        delete queryObject[query];
      }
    }

    return queryObject;
  };

  const getCardData = async () => {
    setIsLoading(true);
    const queryObject = getQueryObject();
    const queryParams = new URLSearchParams(queryObject).toString();

    try {
      const response = await fetch(`/api/market-places?${queryParams}`);

      if (response?.status >= 300) {
        throw Error('Error when call /api/market-places');
      }

      const jsonData = await response?.json();

      if (jsonData?.total === jsonData?.data?.length) {
        setIsEndList(true);
      } else {
        setIsEndList(false);
      }

      setCharacters(jsonData?.data);
    } catch (error: any) {
      api.error({
        message: error?.message,
        placement: 'bottomLeft',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadmoreCard = async () => {
    setIsLoadingViewMore(true);
    const queryObject = getQueryObject();

    queryObject['limit'] = DEFAULT_LIMIT.toString();
    queryObject['offset'] = characters.length.toString();

    const queryParams = new URLSearchParams(queryObject).toString();

    try {
      const response = await fetch(`/api/market-places?${queryParams}`);

      if (response?.status >= 300) {
        throw Error('Error when call /api/market-places');
      }

      const jsonData = await response.json();
      const newCharacters = [...characters, ...jsonData?.data];

      if (jsonData?.total === newCharacters?.length) {
        setIsEndList(true);
      }

      setCharacters(newCharacters);
    } catch (error: any) {
      api.error({
        message: error?.message,
        placement: 'bottomLeft',
      });
    } finally {
      setIsLoadingViewMore(false);
    }
  };

  // Get marketplaces when mounted
  React.useEffect(() => {
    getCardData();
  }, [searchParams]);

  // System can auto refresh data after 60 seconds
  React.useEffect(() => {
    let interval;

    // eslint-disable-next-line prefer-const
    interval = setInterval(() => {
      getCardData();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [searchParams]);

  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <Box>
      {contextHolder}
      <Row className={bodyStyles['character-list']}>
        {characters?.length ? (
          characters?.map((character) => (
            <CharacterCard key={character.id} characterData={character} />
          ))
        ) : (
          <Box>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Box>
        )}
        {isLoadingViewMore ? <CardSkeleton /> : <></>}
      </Row>

      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.2rem',
        }}
      >
        <ViewMoreButton
          hidden={!characters?.length}
          isEndList={isEndList}
          loading={isLoadingViewMore}
          onLoadMore={loadmoreCard}
        />
      </Row>
    </Box>
  );
};
