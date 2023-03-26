import { motion } from 'framer-motion';
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='h-screen'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h[200px] object-cover object-center'
        src='https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Google Developer</h4>
        <p className='font-bold text-2xl mt-1'>Alejandro</p>
        <div className='flex space-x-2'>
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p>Started work... - ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Test point</li>
          <li>Test point</li>
          <li>Test point</li>
          <li>Test point</li>
          <li>Test point</li>
          <li>Test point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
