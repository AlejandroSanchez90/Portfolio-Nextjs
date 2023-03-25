type Props = {};
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-50 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'>
        <SocialIcon
          url='https://www.instagram.com/alex9010/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/AlejandroSanchez90'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/alejandroasp9010'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
      </motion.div>
    </header>
  );
}

export default Header;
