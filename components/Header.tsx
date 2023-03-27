import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { Social } from '@/typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const naviate = useRouter();
  const navigate = () => {
    Router.push('/');
  };
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
        {socials.map((social) => (
          <SocialIcon url={social.url} key={social._id} fgColor='gray' bgColor='transparent' />
        ))}
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
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        onClick={() => Router.push('#contact')}>
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
