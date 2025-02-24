import { useRouter, useSearchParams } from 'next/navigation';

export const useChangeParam = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParams = () => {
    const queryObject: { [key: string]: string } = {};
    searchParams.forEach((paramValue, paramKey) => {
      queryObject[paramKey] = paramValue;
    });

    return queryObject;
  };

  const getParam = (key: string) => {
    return searchParams?.get(key);
  };

  const onChangeParam = (key: string, value: string) => {
    const queryObject = getParams();

    queryObject[key] = value;
    const params = new URLSearchParams(queryObject).toString();

    router.push(`?${params}`, { scroll: false });
  };

  const onChangeParams = (queryParams: { [key: string]: string }) => {
    const queryObject = getParams();

    Object.assign(queryObject, queryParams);
    const params = new URLSearchParams(queryObject).toString();

    router.push(`?${params}`, { scroll: false });
  };

  const onClearParams = (queryParams: string[]) => {
    const queryObject = getParams();

    for (const queryParam of queryParams) {
      delete queryObject[queryParam];
    }

    const params = new URLSearchParams(queryObject).toString();
    router.push(`?${params}`, { scroll: false });
  };

  return {
    getParams,
    getParam,
    onChangeParams,
    onChangeParam,
    onClearParams,
  };
};
