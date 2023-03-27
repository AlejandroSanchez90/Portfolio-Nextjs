import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className='rounded-full p-2 border border-gray-500 object-cover w-16 h-16 md:h-24 md:w-24 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out'
        alt=''
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:h-24 md:w-24 xl:w-30 xl:h-30 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl md:text-2xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
