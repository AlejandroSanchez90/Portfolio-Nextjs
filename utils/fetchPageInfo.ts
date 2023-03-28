import { PageInfo } from '@/typings';

export const fetchPageInfo = async () => {
  const res = await fetch(
    `https://uohkfmj2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'pageInfo'%5D%5B0%5D`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.result;
  return pageInfo;
};
