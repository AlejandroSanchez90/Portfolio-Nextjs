import { Skill } from '@/typings';

export const fetchSkills = async () => {
  const res = await fetch(
    `https://uohkfmj2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'skill'%5D%20%7B%0A%20%20...%2C%0A%7D`
  );
  const data = await res.json();
  const skills: Skill[] = data.result;
  console.log(skills);

  return skills;
};
