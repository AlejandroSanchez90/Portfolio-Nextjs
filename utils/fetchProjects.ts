import { Project } from '@/typings';

export const fetchProjects = async () => {
  const res = await fetch(
    `https://uohkfmj2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'project'%5D%20%7B%0A%20%20...%2C%0A%20%20technologies%5B%5D-%3E%0A%20%20%20%20%7D`
  );
  const data = await res.json();
  const projects: Project[] = data.result;

  projects.sort((a, b) => (b._createdAt > a._createdAt ? 1 : -1));
  projects.map((project) => {
    console.log(project.title);
  });

  return projects;
};
