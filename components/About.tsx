import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
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
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        className='-mb-28 md:mb-0 flex-shrink-0 w-48 h-48  rounded-full object-contain md:object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        src='/images/about_photo.jpg'
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

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
        <p className='text-sm md:text-base'>
          I am a web developer with a passion for coding. I have been coding for the past 8 years,
          mainly working on hobby projects using C#. I always had an interest in technology and
          programming, so it was only natural for me to pursue a career in this field. After moving
          to the United States, I decided to make web development my specialty. I have become
          proficient in a variety of programming languages, including HTML, CSS,
          JavaScript/TypeScript, Tailwind and React/NextJS. I am always looking for new and exciting
          ways to improve my skills and stay up-to-date with the latest trends and technologies in
          the industry.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
