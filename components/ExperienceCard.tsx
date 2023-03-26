import { motion } from 'framer-motion';
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            alt=''
            className='h-10 w-10 rounded-full'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            alt=''
            className='h-10 w-10 rounded-full'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            alt=''
            className='h-10 w-10 rounded-full'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            alt=''
            className='h-10 w-10 rounded-full'
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - ended...</p>
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
