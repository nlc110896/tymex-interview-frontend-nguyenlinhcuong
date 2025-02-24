'use client';

import React from 'react';
import tiers from '@/data/tier.json';
import themes from '@/data/theme.json';
import times from '@/data/time.json';
import prices from '@/data/price.json';
import { Action } from './action';
import { GroupSelect } from './group-select';
import { useChangeParam } from '@/hook/useChangeParam';
import { Box } from '@/components/HOC/box';

const defaultFilters = {
  tier: 'all',
  theme: 'all',
  time: 'all',
  price: 'all',
};

export const GroupSearch = () => {
  const { onChangeParams, onClearParams, getParam } = useChangeParam();
  const [filters, setFilters] = React.useState(defaultFilters);

  const onChangeFilter = (key: string, value: string) => {
    setFilters((prevFilter) => {
      return {
        ...prevFilter,
        [key]: value,
      };
    });
  };

  const onClearFilter = () => {
    onClearParams(Object.keys(defaultFilters));
    setFilters(defaultFilters);
  };

  const onSearchFilter = () => {
    onChangeParams(filters);
  };

  React.useEffect(() => {
    const currentParams = {
      tier: getParam('tier') ?? defaultFilters.tier,
      theme: getParam('theme') ?? defaultFilters.theme,
      time: getParam('time') ?? defaultFilters.time,
      price: getParam('price') ?? defaultFilters.price,
    };

    setFilters(currentParams);
  }, []);

  return (
    <Box>
      <GroupSelect
        label="TIER"
        options={tiers}
        value={filters?.tier}
        onChange={(tier) => onChangeFilter('tier', tier)}
      />
      <GroupSelect
        label="THEME"
        options={themes}
        value={filters?.theme}
        onChange={(theme) => onChangeFilter('theme', theme)}
      />
      <GroupSelect
        label="TIME"
        options={times}
        value={filters?.time}
        onChange={(time) => onChangeFilter('time', time)}
      />
      <GroupSelect
        label="PRICE"
        options={prices}
        value={filters?.price}
        onChange={(price) => onChangeFilter('price', price)}
      />
      <Action onResetFilter={onClearFilter} onSearch={onSearchFilter} />
    </Box>
  );
};
