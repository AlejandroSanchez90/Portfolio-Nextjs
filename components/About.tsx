import { urlFor } from '@/sanity';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        className='-mb-32 md:mb-0 flex-shrink-0 w-48 h-48  rounded-full object-contain md:object-contain md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
      />

      <div className='space-y-5 px-0 mt-5 md:px-10'>
        <h4 className='text-xl md:text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
        <p className='text-xs md:text-base'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
