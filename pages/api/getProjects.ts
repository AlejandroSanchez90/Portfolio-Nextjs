import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Project } from '@/typings';

const query = groq`*[_type == 'project'] {
  ...,
  technologies[]->
    }`;

type Data = {
  projects: Project[];
};

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}

//https://uohkfmj2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'pageInfo'%5D%5B0%5D

//https://uohkfmj2.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'project'%5D%20%7B%0A%20%20...%2C%0A%20%20technologies%5B%5D-%3E%0A%20%20%20%20%7D
