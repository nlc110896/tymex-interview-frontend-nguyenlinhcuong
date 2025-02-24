'use client';

import { Box } from '@/components/HOC/box';
import { useChangeParam } from '@/hook/useChangeParam';
import { ExpandFilter } from './expand-filter';
import { GroupSearch } from './group-search';
import { Search } from './search';
import bodyStyles from '@/styles/modules/body.module.css';
import { PriceSlider } from './price-slider';

const Filter = () => {
  const { onChangeParam, getParam } = useChangeParam();

  const onSearchText = (text: string) => {
    onChangeParam('text', text);
  };

  return (
    <Box>
      <Box className={bodyStyles['group-filter-search']}>
        <ExpandFilter />
        <Search onSearch={onSearchText} defaultValue={getParam('text') ?? ''} />
      </Box>
      <PriceSlider />
      <Box className="hide-under-1440">
        <GroupSearch />
      </Box>
    </Box>
  );
};

export default Filter;
