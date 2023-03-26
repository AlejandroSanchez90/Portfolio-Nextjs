import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:h-24 md:w-24 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out'
        alt=''
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:h-24 md:w-24 xl:w-30 xl:h-30 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl md:text-2xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
