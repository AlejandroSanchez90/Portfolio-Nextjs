import { Experience } from '@/typings';

export const fetchExperiences = async () => {
  const res = await fetch(
    `https://uohkfmj2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'experience'%5D%20%7B%0A%20%20...%2C%0A%20%20technologies%5B%5D-%3E%0A%20%20%20%20%7D`
  );
  const data = await res.json();
  const experiences: Experience[] = data.result;
  return experiences;
};
